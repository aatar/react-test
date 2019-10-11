import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../resources/images/logo.png';
import home from '../../../../resources/images/home.png';
import { ROUTES } from '../../routes';
import Footer from '../../../shared/components/Footer';

import styles from './styles.scss';
import { STRINGS } from './strings';

const styless = {
  spanHello: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ccc'
  }
};

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.mainSection}>
          <img src={home} alt="" className={styles.homeImage} />
          <div className={styles.content}>
            <img src={logo} alt="" className={styles.logo} />
            <span className={styles.title}>{STRINGS.TITLE}</span>
            <div className={styles.buttons}>
              <Link to={ROUTES.PROPERTIES}>{STRINGS.SEARCH_PROPERTIES}</Link>
              <Link to={ROUTES.VALUATOR}>{STRINGS.VALUATOR}</Link>
            </div>
            <span style={styless.spanHello}>Hellooo!!</span>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
