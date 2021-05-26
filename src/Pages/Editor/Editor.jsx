import React from 'react';

import classes from './Editor.module.css';
import Form from '../../Components/Form';
import Input from '../../UIElements/Input';
import Button from '../../UIElements/Button';

const Editor = () => (
  <div className={classes.Editor}>
    <Form>
      <Input inputType="inputElement" type="text" name="title" placeholder="Article Title" />
      <Input inputType="inputElement" type="text" name="about" placeholder="What's this article about?" />
      <Input inputType="textareaElement" rows="8" placeholder="Write your article (in markdown)" />
      <Input inputType="inputElement" type="text" placeholder="Enter Tags" />
      <Button type="button" btnType="Primary">Publish Article</Button>
    </Form>
  </div>
);

export default Editor;
