import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import classes from './SignUpForm.module.css';
import { Button, BUTTON_TYPE } from '../../../UIElements';

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address!').required('Required'),
  password: Yup.string()
    .min(6, 'Must be least 6 characters!')
    .max(15, 'must be 15 characters or less!')
    .required('Required'),
});

const SignUpForm = () => (
  <div className={classes.SignUpForm}>
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        // same shape as initial values
        // eslint-disable-next-line no-console
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {errors.username && touched.username ? <div className={classes.error}>{errors.username}</div> : null}
          <Field name="username" type="text" placeholder="Username" />
          {errors.email && touched.email ? <div className={classes.error}>{errors.email}</div> : null}
          <Field name="email" type="email" placeholder="Email" />
          {errors.password && touched.password ? <div className={classes.error}>{errors.password}</div> : null}
          <Field name="password" type="password" placeholder="Password" />
          <Button type="submit" btnType={BUTTON_TYPE.PRIMARY}>Sign In</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUpForm;
