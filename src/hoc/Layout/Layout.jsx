import React from 'react';

import classes from './Layout.module.css';
import Header from '../../Components/Header';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div className={classes.Layout}>
    <Header />
    <main>
      {children}
    </main>
  </div>
);

export default Layout;
