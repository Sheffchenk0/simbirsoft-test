import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Competition from '../../Components/Competition/Competition';
import { getCompetitions } from '../../redux/reducers';
import styles from './Competitions.module.css';

export default memo(function Competitions() {
  const competitions = useSelector((state) => state.competitions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!competitions.length) {
      dispatch(getCompetitions());
    }
  }, [competitions]);
  return (
    <div className={styles.competitions}>
      {competitions.length > 0 &&
        competitions.map((el) => (
          <Competition
            title={el.name}
            country={el.area.name}
            startDate={el.currentSeason?.startDate}
            endDate={el.currentSeason?.endDate}
          />
        ))}
    </div>
  );
});
