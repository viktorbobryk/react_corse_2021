import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { addNewArticle } from '../../../redux/modules/articles/articlesActions';

import classes from './EditorForm.module.css';
import { Button, BUTTON_TYPE } from '../../../UIElements';

const EditorSchema = Yup.object().shape({
  title: Yup.string().required('title can\'t be blank'),
  description: Yup.string().required('description can\'t be blank'),
  body: Yup.string().required('body can\'t be blank'),
  tagList: Yup.string(),
});

const EditorForm = () => {
  const dispatch = useDispatch();
  return (
    <div className={classes.EditorForm}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          body: '',
          tagList: '',
        }}
        validationSchema={EditorSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(addNewArticle(values));
          console.log(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.title && touched.title && <div className={classes.error}>{errors.title}</div>}
            <Field name="title" type="text" placeholder="Article Title" />
            {errors.description && touched.description && <div className={classes.error}>{errors.description}</div>}
            <Field name="description" type="text" placeholder="What's this article about?" />
            {errors.body && touched.body && <div className={classes.error}>{errors.body}</div>}
            <Field name="body" as="textarea" rows="10" placeholder="Write your article (in markdown)" />
            {errors.tagList && touched.tagList && <div className={classes.error}>{errors.tagList}</div>}
            <Field name="tagList" type="text" placeholder="Enter tags" />
            <Button type="submit" btnType={BUTTON_TYPE.PRIMARY}>Publish Article</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditorForm;
