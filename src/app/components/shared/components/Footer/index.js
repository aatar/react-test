import React from 'react';

import itba from '../../../../resources/images/itba.png';

import { STRINGS } from './strings';
import styles from './styles.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.itbaLogo}>
      <img src={itba} alt="" />
    </div>
    <div className={styles.brand}>
      <span>{STRINGS.BRAND_LINE_ONE}</span>
      <span>{STRINGS.BRAND_LINE_TWO}</span>
    </div>
  </div>
);

export default Footer;
