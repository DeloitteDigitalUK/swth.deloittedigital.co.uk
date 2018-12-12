import React from 'react';

import Logo from '../Logo';
import WidthControl from '../WidthControl';

import styles from './Landing.module.scss';

const Landing = () => (
  <div className={styles.landing}>
    <WidthControl>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.oval}>
        <h1 className={styles.h1}>South West Technology Hub</h1>
        <h2 className={styles.h2}>We are landing</h2>
      </div>
    </WidthControl>
  </div>
);

export default Landing;
