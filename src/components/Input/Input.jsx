import React from 'react';
import cx from 'classnames';
import styles from './Input.module.scss';

const Input = ({ id, placeholder, isLabelVisible = false, ...rest }) => (
  <div className={styles.container}>
    <label
      className={cx(styles.label, { [styles.isNotVisible]: !isLabelVisible })}
      htmlFor={id}
    >
      {placeholder}
    </label>
    <input
      id={id}
      placeholder={placeholder}
      className={styles.input}
      {...rest}
    />
  </div>
);

export default Input;
