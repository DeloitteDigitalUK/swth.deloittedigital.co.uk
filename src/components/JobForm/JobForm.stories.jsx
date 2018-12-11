import React from 'react';
import { storiesOf } from '@storybook/react';
import JobForm from './JobForm';

storiesOf('JobForm').add('default', () => <JobForm jobId={0} />);
