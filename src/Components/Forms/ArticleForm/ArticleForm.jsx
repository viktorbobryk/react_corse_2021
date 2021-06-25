import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import classes from './ArticleForm.module.css';
import { Button, BUTTON_TYPE } from '../../../UIElements';

const ArticleSchema = Yup.object().shape({
  title: Yup.string().required('title can\'t be blank'),
  about: Yup.string().required('description can\'t be blank'),
  article: Yup.string().required('body can\'t be blank'),
  tags: Yup.string(),
});

const ArticleForm = () => (
  <div className={classes.ArticleForm}>
    <Formik
      initialValues={{
        comment: '',
      }}
      validationSchema={ArticleSchema}
      onSubmit={(values, { resetForm }) => {
        // same shape as initial values
        // eslint-disable-next-line no-console
        console.log(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {errors.comment && touched.comment && <div className={classes.error}>{errors.comment}</div>}
          <Field name="comment" as="textarea" rows="10" placeholder="Write a comment ..." />
          <Button type="submit" btnType={BUTTON_TYPE.PRIMARY}>Post Comment</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ArticleForm;
