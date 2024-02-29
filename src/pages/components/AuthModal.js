import { useState } from 'react';

const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  console.log(email, password, confirmPassword);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError(null);
  };

  

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        X
      </div>
      <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
      <p>By clicking Log In, you agree to our terms.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && <input
          type="password"
          id="password-check"
          name="password-check"
          placeholder="Password-confirm"
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />}

        <input className='secondary-button'
            type="submit" />

        {error && <p>{error}</p>}
      </form>
      <hr />
      <h2>GET THE APP</h2>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;