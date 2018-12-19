import React from 'react';
import styles from './GetInTouch.module.scss';
import SideBySide from '../SideBySide';
import WidthControl from '../WidthControl';
import ContentContainer from '../../containers/ContentContainer';

const GetInTouch = () => (
  <div className={styles.getInTouch}>
    <WidthControl>
      <SideBySide
        left={<ContentContainer section="drop-in" />}
        right={<ContentContainer section="find-us" />}
      />
    </WidthControl>
  </div>
);

export default GetInTouch;
