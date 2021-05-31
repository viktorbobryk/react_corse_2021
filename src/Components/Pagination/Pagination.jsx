import React from 'react';

import classes from './Pagination.module.css';

const buttons = [];

for (let i = 0; i < 20; i += 1) {
  buttons.push(<li key={i}>{i}</li>);
}
const Pagination = () => (
  <div className={classes.Pagination}>
    <ul>
      {buttons }
    </ul>
  </div>
);

export default Pagination;
