import React from 'react';
import { storiesOf } from '@storybook/react';
import SideBySide from './SideBySide';

storiesOf('SideBySide').add('default', () => (
  <SideBySide
    left={() => <p>This shows you how to render something here</p>}
    right={() => <p>and something equally spaced over here</p>}
  />
));
