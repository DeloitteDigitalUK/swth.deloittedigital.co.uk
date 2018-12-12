import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideBySide from '../SideBySide';
import WidthControl from '../WidthControl';
import Logo from '../Logo';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <WidthControl>
      <SideBySide
        left={
          <>
            <Logo />
          </>
        }
        right={
          <SideBySide
            right={
              <>
                <h4>Follow us</h4>
                <span className={styles.socialLinks}>
                  <a href="https://www.instagram.com/deloittedigitaluk" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} />
                  </a>
                  <a href="https://www.facebook.com/DeloitteDigitalUK" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} />
                  </a>
                  <a href="https://twitter.com/deloittedigi_uk" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} />
                  </a>
                  <a href="https://open.spotify.com/user/bbc_playlister/playlist/2ahRj2qynhNin0a898mGWc?si=s7vTyE6ATgyjFivRrvdAaQ" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size="2x" icon={['fab', 'spotify']} />
                  </a>
                </span>
              </>
            }
          />
        }
      />
    </WidthControl>
  </div>
);

export default Footer;
