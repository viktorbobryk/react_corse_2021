import React from 'react';

import classes from './Settings.module.css';
import Form from '../../Components/Form';
import FormHeader from '../../Components/Form/FormHeader';
import {
  Input, TextArea, Button, BUTTON_TYPE,
} from '../../UIElements';

const Settings = () => (
  <div className={classes.Settings}>
    <FormHeader>Your Settings</FormHeader>
    <Form>
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
