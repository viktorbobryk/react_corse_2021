import React from 'react';

import classes from './SignIn.module.css';
import Form from '../../Components/Form';
import FormHeader from '../../Components/Form/FormHeader';
import FormText from '../../Components/Form/FormText/FormText';
import { Input, Button, BUTTON_TYPE } from '../../UIElements';

const SignIn = () => (
  <div className={classes.SignIn}>
    <FormHeader>Sign In</FormHeader>
    <FormText>Need an account?</FormText>
    <Form>
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button btnType={BUTTON_TYPE.PRIMARY}>Sign in</Button>
    </Form>
  </div>
);

export default SignIn;
