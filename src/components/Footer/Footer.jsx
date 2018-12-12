import React from 'react';
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
            left={
              <SideBySide
                left={
                  <>
                    <h4>Footer header</h4>
                    <div>
                      <a href="/">Link</a>
                    </div>
                    <div>
                      <a href="/">Link</a>
                    </div>
                    <div>
                      <a href="/">Link</a>
                    </div>
                  </>
                }
                right={
                  <>
                    <h4>Footer header</h4>
                    <div>
                      <a href="/">Link</a>
                    </div>
                    <div>
                      <a href="/">Link</a>
                    </div>
                    <div>
                      <a href="/">Link</a>
                    </div>
                  </>
                }
              />
            }
            right={
              <>
                <h4>Follow us</h4>
                <div>
                  <a href="/">Link</a>
                </div>
                <div>
                  <a href="/">Link</a>
                </div>
                <div>
                  <a href="/">Link</a>
                </div>
              </>
            }
          />
        }
      />
    </WidthControl>
  </div>
);

export default Footer;
