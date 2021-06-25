import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import classes from './Settings.module.css';
import { Button, BUTTON_TYPE } from '../../UIElements';

const SettingsSchema = Yup.object().shape({
  title: Yup.string().required('title can\'t be blank'),
  about: Yup.string().required('description can\'t be blank'),
  article: Yup.string().required('body can\'t be blank'),
  tags: Yup.string(),
});

const SettingsForm = () => (
  <div className={classes.SettingsForm}>
    <Formik
      initialValues={{
        url: '',
        title: '',
        about: '',
        email: '',
        newPassword: '',
      }}
      validationSchema={SettingsSchema}
      onSubmit={(values, { resetForm }) => {
        // same shape as initial values
        // eslint-disable-next-line no-console
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {errors.url && touched.url && <div className={classes.error}>{errors.url}</div>}
          <Field name="url" type="url" placeholder="Article Title" />
          {errors.title && touched.title && <div className={classes.error}>{errors.title}</div>}
          <Field name="title" as="textarea" rows="10" placeholder="Article Title" />
          {errors.about && touched.about && <div className={classes.error}>{errors.about}</div>}
          <Field name="about" type="text" placeholder="Short bio about you" />
          {errors.email && touched.email && <div className={classes.error}>{errors.email}</div>}
          <Field name="email" type="email" placeholder="email" />
          {errors.tags && touched.tags && <div className={classes.error}>{errors.tags}</div>}
          {errors.password && touched.password && (<div className={classes.error}>{errors.password}</div>)}
          <Field name="password" type="password" placeholder="password" />
          <Button type="submit" btnType={BUTTON_TYPE.PRIMARY}>Update Settings</Button>
          <hr />
          <Button type="button" btnType={BUTTON_TYPE.DANGER_OUTLINE}>Or click here to logout.</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SettingsForm;
