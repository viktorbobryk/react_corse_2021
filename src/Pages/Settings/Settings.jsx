import React from 'react';

import classes from './Settings.module.css';
import Form from '../../Components/Form';
import Input from '../../UIElements/Input';
import TextArea from '../../UIElements/TextArea';
import Button from '../../UIElements/Button';

import BUTTON_TYPE from '../../configs/buttons';

const Settings = () => (
  <div className={classes.Settings}>
    <Form formTitle="Your Settings">
      <Input type="text" name="url" placeholder="URL of profile picture" />
      <Input type="text" name="userName" placeholder="userName" />
      <TextArea rows="8" name="textarea" placeholder="Short bio about you" />
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="New Password" />
      <Button btnType={BUTTON_TYPE.PRIMARY}>Update Settings</Button>
      <hr style={{ width: '100%' }} />
      <Button type="button" btnType="Danger-outline">Or click here to logout.</Button>
    </Form>
  </div>
);

export default Settings;
