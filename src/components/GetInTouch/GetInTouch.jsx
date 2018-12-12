import React from 'react';
import styles from './GetInTouch.module.scss';
import SideBySide from '../SideBySide';
import WidthControl from '../WidthControl';

const GetInTouch = () => (
  <div className={styles.getInTouch}>
    <WidthControl>
      <SideBySide
        left={
          <>
            <h2>Drop in for a cuppa</h2>
            <p>Come and have a chat over a cup of tea or coffee…</p>
            <p>
              Email us{' '}
              <a href="mailto:dd-careers@deloitte.co.uk">
                dd-careers@deloitte.co.uk
              </a>
            </p>
          </>
        }
        right={
          <SideBySide
            left={
              <>
                <h4>You can find us at</h4>
                <div>Floor 6</div>
                <div>Bull Wharf</div>
                <div>Redcliff St</div>
                <div>Bristol</div>
                <div>BS1 6QR</div>
              </>
            }
            right={
              <>
                <h4>New business enquiries</h4>
                <p>
                  We look forward to collaborating with you on your project
                  ideas
                </p>
                <p>
                  Email us{' '}
                  <a href="mailto:swth@deloitte.co.uk">swth@deloitte.co.uk</a>
                </p>
              </>
            }
          />
        }
      />
    </WidthControl>
  </div>
);

export default GetInTouch;
