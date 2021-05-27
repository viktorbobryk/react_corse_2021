import React from 'react';

import classes from './SignUp.module.css';
import Form from '../../Components/Form';
import Input from '../../UIElements/Input';
import Button from '../../UIElements/Button';

const SignUp = () => (
  <div className={classes.SignUp}>
    <Form formTitle="Sign Up" text="Have an account?">
      <Input inputType="inputElement" name="username" type="text" placeholder="Username" />
      <Input inputType="inputElement" name="email" type="email" placeholder="Email" />
      <Input inputType="inputElement" name="password" type="password" placeholder="Password" />
      <Button type="button" btnType="Primary">Sign up</Button>
    </Form>
  </div>
);
export default SignUp;
