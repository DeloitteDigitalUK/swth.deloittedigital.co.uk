import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faSpotify, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import HomePage from './HomePage/HomePage';
import Layout from '../layout';

library.add(faFacebook);
library.add(faSpotify);
library.add(faTwitter);
library.add(faInstagram);

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
);

export default IndexPage;
