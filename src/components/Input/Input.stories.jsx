import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './Input';

storiesOf('Input').add('default', () => (
  <Input type="text" placeholder="My name" />
));
