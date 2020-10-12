import React from 'react';
import { styled, Typography } from '@material-ui/core';
import { CardList } from './CardList';
import MMImage from '../images/apps/mm.webp';
import JEImage from '../images/apps/je.webp';
import WWImage from '../images/apps/ww.webp';
import POImage from '../images/apps/po.webp';

const data = [
  {
    name: 'Portfolio',
    link: 'https://kevinvancott.com/',
    image: POImage,
    techStack: 'React, Material-UI'
  },
  {
    name: 'Multi-Monitor Calculator',
    link: 'https://multimonitorcalculator.com/',
    image: MMImage,
    techStack: 'React, Material-UI'
  },
  {
    name: 'Jeopardy 2019',
    link: 'https://github.com/KevinVandy/jeopardy',
    image: JEImage,
    techStack: 'C#.NET Windows Forms, MS Access'
  },
  {
    name: 'Weather Wolf',
    link: 'https://github.com/KevinVandy/WeatherWolf-Grails',
    image: WWImage,
    techStack: 'Grails (Groovy), MySQL, jQuery'
  },
  {
    name: 'µPlanner ',
    link: 'https://github.com/KevinVandy/uPlanner',
    techStack: 'JavaScript, PHP, MariaDB'
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
