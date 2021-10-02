import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import { SignInContainer } from './style';

const LoginButton = () => {
  const history = useHistory();
  const linkBackHomePage = () => {
    history.push('/backHomePage');
  };
  // const { loginWithRedirect } = useAuth0();
  return (
    <SignInContainer>
      <button className='signInBtn' onClick={linkBackHomePage}>
        Sign In
      </button>
    </SignInContainer>
  );
};

export default LoginButton;
