import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import HomePage from './HomePage/HomePage';
import Layout from '../layout';

import '../ascii';

library.add(faFacebook);
library.add(faGithub);
library.add(faTwitter);
library.add(faInstagram);
library.add(faTimesCircle);

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
);

export default IndexPage;
