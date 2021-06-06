import React from 'react';

import classes from './SignIn.module.css';
import Form from '../../Components/Form';
import Input from '../../UIElements/Input';
import Button from '../../UIElements/Button';

import BUTTON_TYPE from '../../configs/buttons';

const SignIn = () => (
  <div className={classes.SignIn}>
    <Form formTitle="Sign In" text="Need an account?">
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button btnType={BUTTON_TYPE.PRIMARY}>Sign in</Button>
    </Form>
  </div>
);

export default SignIn;
