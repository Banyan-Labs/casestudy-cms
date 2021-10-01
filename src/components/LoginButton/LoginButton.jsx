import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { SignInContainer } from './style';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <SignInContainer>
      <button className='signInBtn' onClick={() => loginWithRedirect()}>
        Sign In
      </button>
    </SignInContainer>
  );
};

export default LoginButton;
