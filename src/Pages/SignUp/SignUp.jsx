import React from 'react';

import classes from './SignUp.module.css';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp = () => (
  <div className={classes.SignUp}>
    <h1>Sign Up</h1>
    <p>Have an account?</p>
    <SignUpForm />
  </div>
);
export default SignUp;
