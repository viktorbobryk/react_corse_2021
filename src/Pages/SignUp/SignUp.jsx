import React from 'react';

import classes from './SignUp.module.css';
import Form from '../../Components/Form/Form';
import Input from '../../UIElements/Input/Input';
import Button from '../../UIElements/Button/Button';

const SignUp = () => (
  <div className={classes.SignUp}>
    <Form title="Sign Up" text="Have an account?">
      <Input inputType="inputElement" type="text" placeholder="Username" />
      <Input inputType="inputElement" type="email" placeholder="Email" />
      <Input inputType="inputElement" type="password" placeholder="Password" />
      <Button type="button" btnType="Primary">Sign up</Button>
    </Form>
  </div>
);
export default SignUp;
