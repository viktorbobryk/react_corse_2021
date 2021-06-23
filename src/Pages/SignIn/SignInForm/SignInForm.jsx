import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import classes from './SignInForm.module.css';
import { Button, BUTTON_TYPE } from '../../../UIElements';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address!').required('Required'),
  password: Yup.string()
    .min(6, 'Must be least 6 characters!')
    .max(15, 'must be 15 characters or less!')
    .required('Required'),
});

const SignInForm = () => (
  <div className={classes.SignInForm}>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={(values, { resetForm }) => {
        // same shape as initial values
        // eslint-disable-next-line no-console
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {errors.email && touched.email ? <div className={classes.error}>{errors.email}</div> : null}
          <Field name="email" type="email" placeholder="email" />
          {errors.password && touched.password ? (
            <div className={classes.error}>{errors.password}</div>
          ) : null}
          <Field name="password" type="password" placeholder="password" />
          <Button type="submit" btnType={BUTTON_TYPE.PRIMARY}>Sign In</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignInForm;
