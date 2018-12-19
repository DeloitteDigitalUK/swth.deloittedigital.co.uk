import React from 'react';
import { storiesOf } from '@storybook/react';
import ContentContainer from '.';

storiesOf('ContentContainer').add('default', () => (
  <ContentContainer section="about-us" />
));
