import React from 'react';

import Logo from '../Logo';
import WidthControl from '../WidthControl';
import ContentContainer from '../../containers/ContentContainer';

import styles from './Landing.module.scss';

const Landing = () => (
  <div className={styles.landing}>
    <WidthControl>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.text}>
        <ContentContainer section="landing" />
      </div>
    </WidthControl>
  </div>
);

export default Landing;
