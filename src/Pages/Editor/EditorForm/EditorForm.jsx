import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import classes from './EditorForm.module.css';
import { Button, BUTTON_TYPE } from '../../../UIElements';

const EditorSchema = Yup.object().shape({
  title: Yup.string().required('title can\'t be blank'),
  about: Yup.string().required('description can\'t be blank'),
  article: Yup.string().required('body can\'t be blank'),
  tags: Yup.string(),
});

const EditorForm = () => (
  <div className={classes.EditorForm}>
    <Formik
      initialValues={{
        title: '',
        about: '',
        article: '',
        tags: '',
      }}
      validationSchema={EditorSchema}
      onSubmit={(values, { resetForm }) => {
        // same shape as initial values
        // eslint-disable-next-line no-console
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {errors.title && touched.title ? <div className={classes.error}>{errors.title}</div> : null}
          <Field name="title" type="text" placeholder="Article Title" />
          {errors.about && touched.about ? <div className={classes.error}>{errors.about}</div> : null}
          <Field name="about" type="text" placeholder="What's this article about?" />
          {errors.article && touched.article ? <div className={classes.error}>{errors.article}</div> : null}
          <Field name="article" as="textarea" rows="10" placeholder="Write your article (in markdown)" />
          {errors.tags && touched.tags ? <div className={classes.error}>{errors.tags}</div> : null}
          <Field name="tags" type="text" placeholder="Enter tags" />
          <Button type="submit" btnType={BUTTON_TYPE.PRIMARY}>Publish Article</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default EditorForm;
