import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './Team.module.css';
import { getTeam } from '../../redux/reducers';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Match from '../../Components/Match/Match';
import Matches from '../Matches/Matches';

export default memo(function Team({ match }) {
  const dispatch = useDispatch();
  const { team } = useSelector((state) => ({
    team: state.team,
  }));
  useEffect(() => {
    if (!match.params.id && match.params.id !== 0) {
      console.log(match);
      console.log(match);
    }
    console.log(match.params.id);
  }, [match]);
  useEffect(() => {
    dispatch(getTeam(match.params.id));
  }, [match.params.id]);
  return (
    <>
      {team && team.id == match.params.id && (
        <>
          <div className={styles.team}>
            <img src={team.crestUrl} alt="logo" />
            <div className={styles.title}>{team.name}</div>
          </div>
          <Matches teamId={team.id} />
        </>
      )}
    </>
  );
});
