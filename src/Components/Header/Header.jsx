import React, { useEffect } from 'react';

import classes from './Header.module.css';
import { Logo } from '../../UIElements';
import Menu from '../Menu';
import data from '../../data';
import { autoLogin } from '../../redux/modules/auth/authActions';

const Header = () => {
  const userData = useSelector((state) => state.auth.user);
  const userMenuItem = {
    menuItemName: userData.username, itemType: 'simple', id: userData.id, to: `/${userData.username}`,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, []);
  return (
    <div className={classes.Header}>
      <Logo />
      <Menu menuItems={userData.token ? [...data.menuItemsOnlyLogged, userMenuItem] : data.menuItems} />
    </div>
  );
};

export default Header;
