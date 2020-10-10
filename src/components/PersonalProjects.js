import React from 'react';
import { styled, Typography } from '@material-ui/core';
import { CardList } from './CardList';
import MMImage from '../images/apps/mm.webp';
import JEImage from '../images/apps/je.webp';

const data = [
  {
    name: 'Portfolio',
    link: 'https://kevinvancott.com/'
  },
  {
    name: 'Multi-Monitor Calculator',
    link: 'https://multimonitorcalculator.com/',
    image: MMImage
  },
  {
    name: 'Jeopardy 2019',
    link: 'https://github.com/KevinVandy/jeopardy',
    image: JEImage
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
