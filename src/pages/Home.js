import React from 'react';
import { TimelineArea } from '../components/TimelineArea';
import { styled } from '@material-ui/core';
import { PersonalProjects } from '../components/PersonalProjects';
import { ProfessionalApplications } from '../components/ProfessionalApplications';

const TimelineAreaArea = styled('div')({
  maxWidth: '1400px',
  margin: 'auto',
  paddingRight: '20%',
  '@media only screen and (max-width: 1000px)': {
    paddingRight: '0'
  }
});

const Home = () => {
  return (
    <>
      <TimelineAreaArea>
        <TimelineArea />
      </TimelineAreaArea>
      <PersonalProjects />
      <ProfessionalApplications />
    </>
  );
};

export default Home;
