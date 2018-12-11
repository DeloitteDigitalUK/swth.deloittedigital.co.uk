import React from 'react';
import styles from './Input.module.scss';

const Input = ({ id, placeholder, ...rest }) => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={id}>
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
