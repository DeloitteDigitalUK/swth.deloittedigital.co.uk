import React from 'react';
import Introduction from '../../components/Introduction';
import GetInTouch from '../../components/GetInTouch';
import Footer from '../../components/Footer';
import JobsContainer from '../../containers/JobsContainer';

const HomePage = () => (
  <>
    <Introduction />
    <JobsContainer />
    <GetInTouch />
    <Footer />
  </>
);

export default HomePage;
