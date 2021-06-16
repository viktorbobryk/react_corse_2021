import React from 'react';

import classes from './Editor.module.css';
import EditorForm from './EditorForm/EditorForm';

const Editor = () => (
  <div className={classes.Editor}>
    <EditorForm />
  </div>
);

export default Editor;
