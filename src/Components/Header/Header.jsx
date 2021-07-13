import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { Logo } from '../../UIElements';
import Menu from '../Menu';
import data from '../../data';
import { autoLogin } from '../../redux/modules/auth';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isToken);
  const userData = useSelector((state) => state.auth.user);
  const user = {
    menuItemName: userData.username, itemType: 'simple', id: userData.id, to: `/${userData.username}`,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, []);
  return (
    <div className={classes.Header}>
      <Logo />
      <Menu menuItems={isLoggedIn ? [...data.menuItemsOnlyLogged, user] : data.menuItems} />
    </div>
  );
};

export default Header;
