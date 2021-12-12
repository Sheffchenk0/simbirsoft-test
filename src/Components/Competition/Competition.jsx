import React, { memo } from 'react';
import styles from './Competition.module.css';

export default memo(function Competition({ title, country, startDate, endDate }) {
  return (
    <div className={styles.competition}>
      <div className={styles.country}>{country}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.date}>{'from ' + startDate + '  to  ' + endDate}</div>
    </div>
  );
});
