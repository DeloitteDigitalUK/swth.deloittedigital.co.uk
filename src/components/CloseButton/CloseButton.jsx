import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CloseButton.module.scss';

const CloseButton = ({ onClick }) => (
  <span>
    <button type="button" onClick={onClick} className={styles.closeButton} aria-label="Close this modal window">
      <FontAwesomeIcon size="3x" icon="times-circle" className={styles.closeIcon} />
    </button>
  </span>
);

export default CloseButton;
