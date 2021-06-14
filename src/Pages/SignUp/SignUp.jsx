import React from 'react';

import classes from './SignUp.module.css';
import Form from '../../Components/Form';
import { Input, Button, BUTTON_TYPE } from '../../UIElements';
import FormHeader from '../../Components/Form/FormHeader';
import FormText from '../../Components/Form/FormText/FormText';

const SignUp = () => (
  <div className={classes.SignUp}>
    <FormHeader>Sign Up</FormHeader>
    <FormText>Have an account?</FormText>
    <Form>
      <Input name="username" type="text" placeholder="Username" />
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Password" />
      <Button btnType={BUTTON_TYPE.PRIMARY}>Sign up</Button>
    </Form>
  </div>
);
export default SignUp;
