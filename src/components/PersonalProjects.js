import React from 'react';
import { Typography, styled } from '@material-ui/core';

const PersonalProjectsArea = styled('div')({
  margin: '2rem auto',
  maxWidth: '1400px',
  textAlign: 'center'
});

export const PersonalProjects = () => {
  return (
    <PersonalProjectsArea>
      <Typography variant="h4">My Projects</Typography>
    </PersonalProjectsArea>
  );
};
