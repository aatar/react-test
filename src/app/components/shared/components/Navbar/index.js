import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../resources/images/logo.png';
import { ROUTES } from '../../../App/routes';

import styles from './styles.scss';

const Navbar = () => (
  <Link to={ROUTES.HOME} className={styles.navbarContainer}>
    <img src={logo} alt="" className={styles.logo} />
  </Link>
);

export default Navbar;
