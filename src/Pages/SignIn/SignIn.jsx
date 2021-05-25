import React from 'react';

import classes from './SignIn.module.css';
import Form from '../../Components/Form/Form';
import Input from '../../UIElements/Input/Input';
import Button from '../../UIElements/Button/Button';

const SignIn = () => (
  <div className={classes.SignIn}>
    <Form formTitle="Sign In" text="Need an account?">
      <Input inputType="inputElement" type="email" placeholder="Email" />
      <Input inputType="inputElement" type="password" placeholder="Password" />
      <Button type="button" btnType="Primary">Sign in</Button>
    </Form>
  </div>
);

export default SignIn;
