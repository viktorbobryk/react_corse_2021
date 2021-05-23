import React from 'react';

import classes from './Pagination.module.css';

const rows = [];

for (let i = 0; i < 20; i += 1) {
  rows.push(<li key={i}>{i}</li>);
}
const Pagination = () => (
  <div className={classes.Pagination}>
    <ul>
      {rows}
    </ul>
  </div>
);

export default Pagination;
