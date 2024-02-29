import Nav from './components/Nav'
import { useState } from 'react'
import AuthModal from './components/AuthModal'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setisSignUp] = useState(true)

    const authToken = false

    const handleClick = () => {
        console.log('Clicked')
        setShowModal(true)
        setisSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav minimal={false} setShowModal={setShowModal} showModal={showModal} isSignUp={setisSignUp}/>
            <div className="home">
                <h1 className='primary-title'>Swipe Right</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} setisSignUp={setisSignUp} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}

export default Home
