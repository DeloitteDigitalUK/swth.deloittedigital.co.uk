import React from 'react';

import styles from './SideBySide.module.scss';

const SideBySide = ({ left, right }) => (
  <div className={styles.sideBySide}>
    <div>{left}</div>
    <div>{right}</div>
  </div>
);

export default SideBySide;
