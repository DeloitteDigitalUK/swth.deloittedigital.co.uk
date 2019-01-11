import React from 'react';
import cx from 'classnames';
import styles from './SideBySide.module.scss';

const SideBySide = ({
  left,
  leftStyles,
  right,
  rightStyles,
  sideBySideOverides,
}) => (
  <div className={cx(styles.sideBySide, sideBySideOverides)}>
    <div className={cx(styles.left, leftStyles)}>{left}</div>
    <div className={cx(styles.right, rightStyles)}>{right}</div>
  </div>
);

export default SideBySide;
