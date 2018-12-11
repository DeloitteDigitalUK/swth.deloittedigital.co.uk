import React from 'react';
import styles from './CloseButton.module.scss';

const CloseButton = ({ onClick }) => (
  <span>
    <button type="button" onClick={onClick} className={styles.closeButton}>
      Close
    </button>
  </span>
);

export default CloseButton;
