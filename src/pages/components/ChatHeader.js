import React from 'react';

const ChatHeader = () => {
  return (
    <div className='chat-container-header'>
      Chat Header
      <div className="profile">
        <div className='image-container'>
          <img src='' alt='User Avatar' />
        </div>
        <h3>UserName</h3>
      </div>
      <i className="log-out-icon"></i>
    </div>
  );
}

export default ChatHeader;
