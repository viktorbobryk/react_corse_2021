import React from 'react';
import PropTypes from 'prop-types';

import classes from './Layout.module.css';
import Header from '../../Components/Header';

const Layout = ({ children, menuItems }) => (
  <div className={classes.Layout}>
    <Header {...{ menuItems }} />
    <main>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
