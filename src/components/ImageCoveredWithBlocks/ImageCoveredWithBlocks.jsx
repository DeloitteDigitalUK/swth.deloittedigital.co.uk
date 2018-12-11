import React from 'react';
import styles from './ImageCoveredWithBlocks.module.scss';

const ImageCoveredWithBlocks = () => (
  <div>
    <div className={styles.imageCoveredWithBlocks}>
      <div className={styles.block1} />
      <div className={styles.block2} />
      <div className={styles.block3} />
      <div className={styles.block4} />
      <div className={styles.block5} />
      <div className={styles.block6} />
    </div>
  </div>
);

export default ImageCoveredWithBlocks;
