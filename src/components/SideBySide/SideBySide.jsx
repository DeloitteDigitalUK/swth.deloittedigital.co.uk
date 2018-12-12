import React from 'react';

import styles from './SideBySide.module.scss';

const SideBySide = ({ left, right }) => (
  <div className={styles.sideBySide}>
    <div className={styles.left}>{left}</div>
    <div className={styles.right}>{right}</div>
  </div>
);

export default SideBySide;
