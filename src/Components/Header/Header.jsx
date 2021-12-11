import React, { memo } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';
import { API } from '../../API';
import { PAGES } from '../../constants/pages';

export default memo(function Header() {
  const onClick = () => {
    API.get();
  };
  return (
    <header className={styles.header}>
      <Burger items={PAGES} />
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
});
