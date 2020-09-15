import React from 'react';
import { TimelineArea } from '../components/TimelineArea';
import { styled } from '@material-ui/core';
import { PersonalProjects } from '../components/PersonalProjects';
import { ProfessionalApplications } from '../components/ProfessionalApplications';
import { About } from '../components/About';
import { Skills } from '../components/Skills';

const TimelineAreaWrapper = styled('div')({
  maxWidth: '1400px',
  margin: 'auto'
});

const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <ProfessionalApplications />
      <PersonalProjects />
      <TimelineAreaWrapper>
        <TimelineArea />
      </TimelineAreaWrapper>
    </>
  );
};

export default Home;
