import React from 'react';
import { styled, Typography, Card } from '@material-ui/core';

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

const CardList = styled('section')({
  display: 'flex',
  padding: '3rem',
  overflowX: 'auto'
});

const StyledCard = styled(Card)({
  width: `${1600 / data.length}px`,
  height: '300px'
});

export const PersonalProjects = () => {
  return (
    <PersonalProjectsArea>
      <Typography variant="h2">My Personal Project Highlights</Typography>
      <CardList className="card-list">
        {data.map((d) => (
          <StyledCard className="card">
            <Typography variant="h4">{d.name}</Typography>
          </StyledCard>
        ))}
      </CardList>
    </PersonalProjectsArea>
  );
};
