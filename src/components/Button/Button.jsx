import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

/* eslint-disable react/button-has-type */

const Button = ({
  children, onClick, buttonStyle, type = 'button',
}) => (
  <span>
    <button
      onClick={onClick}
      type={type}
      className={cx(styles.button, {
        [styles.solid]: buttonStyle === 'solid',
      })}
    >
      {children}
    </button>
  </span>
);

export default Button;
