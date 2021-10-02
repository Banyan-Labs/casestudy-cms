import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import { SignUpContainer } from './style';

const SignUpButton = () => {
  const history = useHistory();
  const linkBackHomePage = () => {
    history.push('/backHomePage');
  };
  // const { loginWithRedirect } = useAuth0();
  return (
    <SignUpContainer>
      <button className='signUpBtn' onClick={linkBackHomePage}>
        Sign Up
      </button>
    </SignUpContainer>
  );
};

export default SignUpButton;
