import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import ChatContainer from './components/ChatContainer';

const Dashboard = () => {
  const characters = [
    {
      name: 'Richard Hendricks',
      url: 'https://imgur.com/richard.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://imgur.com/erlich.jpg'
    },
    // ... (other character data)
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swiper-container">
        <div className="card-container">
          {characters.map((character, index) => (
            <TinderCard
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
              preventSwipe={['up', 'down']} // Add this line to prevent swiping up and down
            >
              <div
                style={{ backgroundImage: `url(${character.url})` }}
                className='card'
                key={index}
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">{lastDirection ? <p>You swiped {lastDirection}</p> : null}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
