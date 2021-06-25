import React from 'react';
import PropTypes from 'prop-types';

import classes from './Layout.module.css';
import Header from '../../Components/Header';

const Layout = ({ children }) => (
  <div className={classes.Layout}>
    <Header />
    <main>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
