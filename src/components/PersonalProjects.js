import React from 'react';
import { styled, Typography } from '@material-ui/core';
import { CardList } from './CardList';

const data = [
  {
    name: 'Portfolio',
    link: 'https://kevinvancott.com/'
  },
  {
    name: 'Multi-Monitor Calculator',
    link: 'https://multimonitorcalculator.com/'
  },
  {
    name: 'Jeopardy 2019',
    link: 'https://github.com/KevinVandy/jeopardy'
  },
  {
    name: 'Weather Wolf',
    link: 'https://github.com/KevinVandy/WeatherWolf-Grails'
  },
  {
    name: 'µPlanner ',
    link: 'https://github.com/KevinVandy/uPlanner'
  }
];

const PersonalProjectsArea = styled('div')({
  margin: '2rem auto',
  maxWidth: '1400px',
  textAlign: 'center'
});

export const PersonalProjects = () => {
  return (
    <PersonalProjectsArea>
      <Typography variant="h2">My Personal Project Highlights</Typography>
      <CardList data={data} />
    </PersonalProjectsArea>
  );
};
