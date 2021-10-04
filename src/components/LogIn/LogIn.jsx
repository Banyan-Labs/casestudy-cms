import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { SignInContainer } from './style';

const LoginButton = () => {
  const history = useHistory();
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
  useEffect(() => {
    if (!isLoading && user && isAuthenticated) {
      history.push('/backHomePage');
    }
  }, [isLoading]);

  return (
    <SignInContainer>
      <button className='signInBtn' onClick={() => loginWithRedirect()}>
        Log In/Sign Up
      </button>
    </SignInContainer>
  );
};

export default LoginButton;
