import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';

storiesOf('Checkbox').add('default', () => (
  <Checkbox
    label={
      <span>
        {"I've read your "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www2.deloitte.com/global/en/misc/en-privacy.html"
        >
          Privacy Statement
        </a>
        {' and '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www2.deloitte.com/ro/en/legal/legal.html"
        >
          Terms of Use
        </a>
        .
      </span>
    }
  />
));
