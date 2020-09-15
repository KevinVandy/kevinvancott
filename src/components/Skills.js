import React from 'react'
import { styled, Typography } from '@material-ui/core';

const SkillsArea = styled('div')({
  margin: '2rem auto',
  maxWidth: '1400px',
  textAlign: 'center'
});

export const Skills = () => {
  return (
    <SkillsArea>
      <Typography variant="h2">My Skills</Typography>
    </SkillsArea>
  )
}
