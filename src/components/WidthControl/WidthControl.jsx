import React from 'react';
import styles from './WidthControl.module.scss';

const WidthControl = ({ children }) => (
  <div className={styles.widthControl}>{children}</div>
);

export default WidthControl;
