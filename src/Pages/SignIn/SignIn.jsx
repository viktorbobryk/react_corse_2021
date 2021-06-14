import React from 'react';

import classes from './SignIn.module.css';
import SignInForm from './SignInForm/SignInForm';

const SignIn = () => (
  <div className={classes.SignIn}>
    <h1>Sign In</h1>
    <p>Need an account?</p>
    <SignInForm />
  </div>
);

export default SignIn;
