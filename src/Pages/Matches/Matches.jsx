import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Match from '../../Components/Match/Match';
import { getMatches } from '../../redux/reducers';
import styles from './Matches.module.css';

export default memo(function Matches() {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches);
  useEffect(() => {
    if (!matches?.length) {
      dispatch(getMatches());
    }
  }, [matches]);

  return (
    <div className={styles.matches}>
      {matches.length &&
        matches.map((el) => (
          <Match
            key={el.id}
            leftTeam={el.homeTeam?.name}
            rightTeam={el.awayTeam?.name}
            leftTeamId={el?.homeTeam?.id}
            rughtTeamId={el?.awayTeam?.id}
            date={el.utcDate}
            competition={el.competition?.name}
            winner={el?.score?.winner}
            score={[
              +el?.score?.fullTime?.homeTeam +
                +el?.score?.halfTime?.homeTeam +
                +el?.score?.extraTime?.homeTeam +
                +el?.score?.penalties?.homeTeam,
              +el?.score?.fullTime?.awayTeam +
                +el?.score?.halfTime?.awayTeam +
                +el?.score?.extraTime?.awayTeam +
                +el?.score?.penalties?.awayTeam,
            ]}
          />
        ))}
    </div>
  );
});
