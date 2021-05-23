import React from 'react';

import classes from './Settings.module.css';
import Form from '../../Components/Form/Form';
import Input from '../../UIElements/Input/Input';
import Button from '../../UIElements/Button/Button';

const Settings = () => (
  <div className={classes.Settings}>
    <Form title="Your Settings">
      <Input inputType="inputElement" type="text" name="url" placeholder="URL of profile picture" />
      <Input inputType="inputElement" type="text" name="userName" placeholder="userName" />
      <Input inputType="textareaElement" rows="8" placeholder="Short bio about you" />
      <Input inputType="inputElement" type="email" placeholder="Email" />
      <Input inputType="inputElement" type="password" placeholder="New Password" />
      <Button type="button" btnType="Primary">Update Settings</Button>
      <hr style={{ width: '100%' }} />
      <Button type="button" btnType="Danger">Or click here to logout.</Button>
    </Form>
  </div>
);

export default Settings;
