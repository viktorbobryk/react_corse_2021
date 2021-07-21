import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { login } from '../../../redux/modules/auth/authActions';

import classes from './SignInForm.module.css';
import { Button, BUTTON_TYPE } from '../../../UIElements';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address!').required('Required'),
  password: Yup.string()
    .min(6, 'Must be least 6 characters!')
    .max(15, 'must be 15 characters or less!')
    .required('Required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  return (
    <div className={classes.SignInForm}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(login({ user: { ...values } }));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <>
            <h1>Sign In</h1>
            <p>Need an account?</p>
            <Form>
              {errors.email && touched.email && <div className={classes.error}>{errors.email}</div>}
              <Field name="email" type="email" placeholder="email" />
              {errors.password && touched.password && (<div className={classes.error}>{errors.password}</div>)}
              <Field name="password" type="password" placeholder="password" />
              <Button type="submit" btnType={BUTTON_TYPE.PRIMARY}>Sign In</Button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
