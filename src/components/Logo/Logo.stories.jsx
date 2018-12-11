import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';

storiesOf('Logo').add('default', () => (
  <div style={{ backgroundColor: '#000', padding: '20px' }}>
    <Logo />
  </div>
));
