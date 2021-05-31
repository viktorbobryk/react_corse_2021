import React from 'react';

import classes from './SignIn.module.css';
import Form from '../../Components/Form';
import Input from '../../UIElements/Input';
import Button from '../../UIElements/Button';

const SignIn = () => (
  <div className={classes.SignIn}>
    <Form formTitle="Sign In" text="Need an account?">
      <Input inputType="inputElement" name="email" type="email" placeholder="Email" />
      <Input inputType="inputElement" name="password" type="password" placeholder="Password" />
      <Button type="button" btnType="Primary">Sign in</Button>
    </Form>
  </div>
);

export default SignIn;
