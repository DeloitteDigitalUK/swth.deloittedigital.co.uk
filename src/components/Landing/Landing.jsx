import React from 'react';

import Logo from '../Logo';
import WidthControl from '../WidthControl';
import ContentContainer from '../../containers/ContentContainer';

import styles from './Landing.module.scss';

const Landing = () => (
  <div className={styles.landing}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <div className={styles.textContainer}>
      <WidthControl>
        <div className={styles.text}>
          <ContentContainer section="landing" />
        </div>
      </WidthControl>
    </div>
  </div>
);

export default Landing;
