import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Match.module.css';

export default memo(function Match({
  leftTeam,
  rightTeam,
  date,
  competition,
  winner,
  score,
  leftTeamId,
  rightTeamId,
}) {
  const [formatDate, setformatDate] = useState('00:00');
  useEffect(() => {
    const DATE = new Date(date);
    let hours = getFull(DATE.getHours());
    let minutes = getFull(DATE.getMinutes());
    let newDate = hours + ':' + minutes;
    let now = new Date();
    if (
      DATE.getDate() !== now.getDate() ||
      DATE.getMonth() !== now.getMonth() ||
      DATE.getFullYear() !== now.getFullYear()
    ) {
      newDate =
        DATE.getDate() + '.' + (+DATE.getMonth() + 1) + '.' + DATE.getFullYear() + ' ' + newDate;
    }
    setformatDate(newDate);
    function getFull(time) {
      if (time < 10) return '0' + time;
      return time;
    }
  }, [date]);
  return (
    <div
      className={classNames(styles.match, {
        [styles.win]: winner === 'HOME_TEAM',
        [styles.draw]: winner === 'DRAW',
        [styles.lose]: winner === 'AWAY_TEAM',
      })}>
      <div className={styles.team}>
        <Link to={'/team/' + leftTeamId}>
          <div className={styles.title}>{leftTeam}</div>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.date}>{formatDate}</div>
        <div className={styles.competition}>{competition}</div>
        <div className={styles.score}>{winner && score[0] + ':' + score[1]}</div>
      </div>
      <div className={styles.team}>
        <Link to={'/team/' + rightTeamId}>
          <div className={styles.title}>{rightTeam}</div>
        </Link>
      </div>
    </div>
  );
});
