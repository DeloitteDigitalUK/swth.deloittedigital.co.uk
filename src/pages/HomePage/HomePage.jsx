import React from 'react';
import Footer from '../../components/Footer';
import GetInTouch from '../../components/GetInTouch';
import Introduction from '../../components/Introduction';
import JobsContainer from '../../containers/JobsContainer';
import Landing from '../../components/Landing';

const HomePage = () => (
  <>
    <Landing />
    <Introduction />
    <JobsContainer />
    <GetInTouch />
    <Footer />
  </>
);

export default HomePage;
