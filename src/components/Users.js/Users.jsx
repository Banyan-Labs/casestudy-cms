import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Users = () => {
  const { user, isAuthenticated } = useAuth0();
  return isAuthenticated && <div></div>;
};

// Upon sign in, the user should see the backend home page. If they click the detail button,
//  it should go to the backend version of the detail page. That page should then link to the edit
//  page. Logout button should take the user to the frontend homepage.
