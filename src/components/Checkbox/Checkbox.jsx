import React from 'react';
import styles from './Checkbox.module.scss';

const Checkbox = ({ id, label, ...rest }) => (
  <div className={styles.container}>
    <input id={id} className={styles.checkbox} type="checkbox" {...rest} />
    <label htmlFor={id} className={styles.label}>
      {label}
    </label>
  </div>
);

export default Checkbox;
