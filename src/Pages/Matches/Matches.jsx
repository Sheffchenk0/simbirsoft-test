import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Match from '../../Components/Match/Match';
import { getMatches, getTeamMatches } from '../../redux/reducers';
import styles from './Matches.module.css';

export default memo(function Matches({ teamId = null }) {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches);
  useEffect(() => {
    if (teamId !== null) {
      dispatch(getTeamMatches(teamId));
    } else {
      dispatch(getMatches());
    }
  }, [teamId]);

  return (
    <div className={styles.matches}>
      {matches.length > 0 &&
        matches.map((el) => (
          <Match
            key={el.id}
            leftTeam={el.homeTeam?.name}
            rightTeam={el.awayTeam?.name}
            leftTeamId={el?.homeTeam?.id}
            rightTeamId={el?.awayTeam?.id}
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
