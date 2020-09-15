import React from 'react';
import { styled, Typography, Card } from '@material-ui/core';

const data = [
  {
    name: 'Formation-UI',
    link: 'https://test-formation-ui.netlify.app/'
  },
  {
    name: 'TalentMine',
    link: 'https://talentmine.com/'
  },
  {
    name: 'TalentBank',
    link: 'https://core.talentbankonline.com'
  },
  {
    name: 'ICharts',
    link: 'https://dhhs-icharts1.ne.gov/iCharts/'
  },
  {
    name: 'RMNPA',
    link: 'https://dhhs-rmnpa.ne.gov/RMNPAApp/'
  }
];

const ProfessionalApplicationsArea = styled('div')({
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

export const ProfessionalApplications = () => {
  return (
    <ProfessionalApplicationsArea>
      <Typography variant="h2">Professional Applications I Have Worked On</Typography>
      <CardList className="card-list">
        {data.map((d) => (
          <StyledCard className="card">
            <Typography variant="h4">{d.name}</Typography>
          </StyledCard>
        ))}
      </CardList>
    </ProfessionalApplicationsArea>
  );
};
