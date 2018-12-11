import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button')
  .add('default', () => <Button>Hello World</Button>)
  .add('solid', () => (
    <Button buttonStyle="solid">
      Hello World
    </Button>
  ));
