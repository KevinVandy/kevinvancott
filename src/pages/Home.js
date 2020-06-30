import React from 'react';
import { TimelineArea } from '../components/TimelineArea';
import { styled } from '@material-ui/core';

const TimelineAreaArea = styled('div')({
  maxWidth: '1400px',
  margin: 'auto',
  paddingRight: '20%'
});

const Home = () => {
  return (
    <TimelineAreaArea>
      <TimelineArea></TimelineArea>
    </TimelineAreaArea>
  );
};

export default Home;
