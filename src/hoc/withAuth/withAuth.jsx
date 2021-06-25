import { Redirect } from 'react-router-dom';
import React from 'react';
import ROUTES from '../../routes/routesConstants';

const withAuth = (Component, isLoggedIn) => (props) => {
  if (isLoggedIn) {
    // eslint-disable-next-line react/jsx-props-no-spreading,no-console
    console.log('show protected component');
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  }
  // props.history.push(ROUTES.HOME);
  // eslint-disable-next-line no-console
  console.log('redirect to home');
  return <Redirect to={ROUTES.HOME} />;
};
export default withAuth;
