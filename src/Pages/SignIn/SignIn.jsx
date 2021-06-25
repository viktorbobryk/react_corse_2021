import React from 'react';
import classes from './SignIn.module.css';
import SignInForm from '../../Components/Forms/SignInForm';

const SignIn = () => (
  <div className={classes.SignIn}>
    <SignInForm />
  </div>
);

export default SignIn;
