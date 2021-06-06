import React from 'react';

import classes from './SignUp.module.css';
import Form from '../../Components/Form';
import Input from '../../UIElements/Input';
import Button from '../../UIElements/Button';

import BUTTON_TYPE from '../../configs/buttons';

const SignUp = () => (
  <div className={classes.SignUp}>
    <Form formTitle="Sign Up" text="Have an account?">
      <Input name="username" type="text" placeholder="Username" />
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button btnType={BUTTON_TYPE.PRIMARY}>Sign up</Button>
    </Form>
  </div>
);
export default SignUp;
