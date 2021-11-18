import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ResourcesSection = styled('section')({
  position: 'relative',
  minHeight: '300px',
  backgroundColor: '#000',
  color: '#fff',
});

const Title = styled(Typography)({
  textAlign: 'center',
  padding: '1rem',
});

const Resources = () => {
  return (
    <ResourcesSection>
      <Title variant="h3">Where To Find Me</Title>
    </ResourcesSection>
  );
};

export default Resources;
