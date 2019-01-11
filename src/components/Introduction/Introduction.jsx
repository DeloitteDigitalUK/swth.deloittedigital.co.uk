import React from 'react';
import ImageCoveredWithBlocks from '../ImageCoveredWithBlocks';
import SideBySide from '../SideBySide';
import WidthControl from '../WidthControl';
import ContentContainer from '../../containers/ContentContainer';
import styles from './Introduction.module.scss';

const Introduction = () => (
  <div className="background-color-yellow">
    <WidthControl backgroundColor="yellow">
      <SideBySide
        left={<ImageCoveredWithBlocks backgroundColor="yellow" />}
        leftStyles={styles.left}
        right={
          <div className={styles.right}>
            <div className="heading-underline-yellow">
              <ContentContainer section="about-us" />
            </div>
          </div>
        }
        rightStyles={styles.right}
      />
    </WidthControl>
  </div>
);

export default Introduction;
