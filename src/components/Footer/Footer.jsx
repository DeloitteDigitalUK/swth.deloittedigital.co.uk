import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBySide from '../SideBySide';
import WidthControl from '../WidthControl';
import ContentContainer from '../../containers/ContentContainer';
import Logo from '../Logo';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <WidthControl>
      <SideBySide
        sideBySideOverides={styles.sideBySideOverides}
        left={
          <>
            <Logo />
            <p>CREATIVE BUSINESS</p>
          </>
        }
        leftStyles={styles.left}
        right={
          <SideBySide
            sideBySideOverides={styles.sideBySideOverides}
            left={
              <SideBySide
                left={<ContentContainer section="footer-1" />}
                right={<ContentContainer section="footer-2" />}
              />
            }
            right={
              <>
                <h4>Follow us</h4>
                <span className={styles.socialLinks}>
                  <a
                    href="https://twitter.com/deloittedigi_uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} />
                  </a>
                  <a
                    href="https://www.facebook.com/DeloitteDigitalUK"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} />
                  </a>
                  <a
                    href="https://www.instagram.com/deloittedigitaluk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} />
                  </a>
                  <a
                    href="https://github.com/DeloitteDigitalUK/swth.deloittedigital.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon size="2x" icon={['fab', 'github']} />
                  </a>
                </span>
              </>
            }
            rightStyles={styles.rightBottom}
          />
        }
        rightStyles={styles.right}
      />
    </WidthControl>
  </div>
);

export default Footer;
