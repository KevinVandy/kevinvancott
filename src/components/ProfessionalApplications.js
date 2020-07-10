import React from 'react'
import { styled, Typography } from '@material-ui/core';

const ProfessionalApplicationsArea = styled('div')({
  margin: '2rem auto',
  maxWidth: '1400px',
  textAlign: 'center',
});

export const ProfessionalApplications = () => {
  return (
    <ProfessionalApplicationsArea>
      <Typography variant="h4">Professional Applications</Typography>
    </ProfessionalApplicationsArea>
  )
}
