import React from 'react';
import { storiesOf } from '@storybook/react';
import FileInput from './FileInput';

storiesOf('FileInput').add('default', () => (
  <FileInput label="Got a CV or Portfolio?" />
));
