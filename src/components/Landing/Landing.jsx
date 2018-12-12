import React from 'react';

import Logo from '../Logo';
import WidthControl from '../WidthControl';

import styles from './Landing.module.scss';

const Landing = () => (
  <div className={styles.landing}>
    <div className={styles.opacity}>
      <WidthControl>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.oval}>
          <img alt="circle with shining light" src={require('./images/oval.png')} />
          <h1 className={styles.h1}>South West Technology Hub</h1>
          <h2 className={styles.h2}>Delivered by <span className={styles.white}>Deloitte</span> and <span className={styles.white}>Deloitte Digital</span></h2>
        </div>
      </WidthControl>
    </div>
  </div>
);

export default Landing;
