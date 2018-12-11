import React from 'react';
import ImageCoveredWithBlocks from '../ImageCoveredWithBlocks';
import SideBySide from '../SideBySide';
import WidthControl from '../WidthControl';
import styles from './Introduction.module.scss';

const Introduction = () => (
  <WidthControl>
    <SideBySide
      left={<ImageCoveredWithBlocks />}
      right={(
        <div className={styles.right}>
          <h2>We are in the future business</h2>
          <p>
            Our journey is one of business, technology and creativity that today
            enables us to imagine, deliver and run the future.
          </p>
          <p>
            We’re proven, and trusted to do this at scale, in partnership with
            the biggest businesses and brands in the world today.
          </p>
        </div>
)}
    />
  </WidthControl>
);

export default Introduction;
