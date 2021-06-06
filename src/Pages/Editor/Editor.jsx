import React from 'react';

import classes from './Editor.module.css';
import Form from '../../Components/Form';
import {
  Input, TextArea, Button, BUTTON_TYPE,
} from '../../UIElements';

const Editor = () => (
  <div className={classes.Editor}>
    <Form>
      <Input type="text" name="title" placeholder="Article Title" />
      <Input type="text" name="about" placeholder="What's this article about?" />
      <TextArea rows="8" name="textarea" placeholder="Write your article (in markdown)" />
      <Input name="tags" type="text" placeholder="Enter Tags" />
      <Button btnType={BUTTON_TYPE.PRIMARY}>Publish Article</Button>
    </Form>
  </div>
);

export default Editor;
