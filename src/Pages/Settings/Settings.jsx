import React from 'react';

import classes from './Settings.module.css';
import Form from '../../Components/Form';
import Input from '../../UIElements/Input';
import Button from '../../UIElements/Button';

const Settings = () => (
  <div className={classes.Settings}>
    <Form formTitle="Your Settings">
      <Input inputType="inputElement" type="text" name="url" placeholder="URL of profile picture" />
      <Input inputType="inputElement" type="text" name="userName" placeholder="userName" />
      <Input inputType="textareaElement" rows="8" name="textarea" placeholder="Short bio about you" />
      <Input inputType="inputElement" type="email" name="email" placeholder="Email" />
      <Input inputType="inputElement" type="password" name="password" placeholder="New Password" />
      <Button type="button" btnType="Primary">Update Settings</Button>
      <hr style={{ width: '100%' }} />
      <Button type="button" btnType="Danger-outline">Or click here to logout.</Button>
    </Form>
  </div>
);

export default Settings;
