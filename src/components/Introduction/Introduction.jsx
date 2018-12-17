import React from 'react';
import ImageCoveredWithBlocks from '../ImageCoveredWithBlocks';
import SideBySide from '../SideBySide';
import WidthControl from '../WidthControl';
import ContentContainer from '../../containers/ContentContainer';
import styles from './Introduction.module.scss';

const Introduction = () => (
  <WidthControl>
    <SideBySide
      left={<ImageCoveredWithBlocks />}
      right={(
        <div className={styles.right}>
          <ContentContainer section="about-us" />
        </div>
      )
      }
    />
  </WidthControl>
);

export default Introduction;
