import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { SignUpContainer } from './style';

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <SignUpContainer>
      <button className='signUpBtn' onClick={() => loginWithRedirect()}>
        Sign Up
      </button>
    </SignUpContainer>
  );
};

export default SignUpButton;
