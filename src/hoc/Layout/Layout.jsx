import React from 'react';
import PropTypes from 'prop-types';

import classes from './Layout.module.css';
import Header from '../../Components/Header';

const Layout = ({ children, isLoggedIn }) => (
  <div className={classes.Layout}>
    <Header {...{ isLoggedIn }} />
    <main>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Layout;
