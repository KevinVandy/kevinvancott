import React from 'react';
import { styled, Typography } from '@material-ui/core';
import { CardList } from './CardList';
import TMImage from '../images/apps/tm.webp';
import FUIImage from '../images/apps/fui.webp';
import TBImage from '../images/apps/tb.webp';
import ICImage from '../images/apps/ic.webp';
import RAImage from '../images/apps/ra.webp';

const data = [
  {
    company: 'Talent Plus, Inc',
    name: 'Formation-UI',
    link: 'https://test-formation-ui.netlify.app/',
    image: FUIImage,
    techStack: 'React, Material-UI'
  },
  {
    company: 'Talent Plus, Inc',
    name: 'TalentMine',
    link: 'https://talentmine.com/',
    image: TMImage,
    techStack: 'AWS, React, TypeScript, Material-UI, Node.js, Grails (Groovy), Elasticsearch'
  },
  {
    company: 'Talent Plus, Inc',
    name: 'TalentBank',
    link: 'https://core.talentbankonline.com',
    image: TBImage,
    techStack: 'Grails, jQuery, Bootstrap'
  },
  {
    company: 'State of Nebraska',
    name: 'ICHARTS',
    link: 'https://dhhs-icharts1.ne.gov/iCharts/',
    image: ICImage,
    techStack: 'Java, jQuery, Tomahawk, COBOL, DB2'
  },
  {
    company: 'State of Nebraska',
    name: 'RMNPA',
    link: 'https://dhhs-rmnpa.ne.gov/RMNPAApp/',
    image: RAImage,
    techStack: 'Java, jQuery, PrimeFaces, COBOL, DB2'
  }
];

const ProfessionalApplicationsArea = styled('div')({
  margin: '2rem auto',
  maxWidth: '1400px',
  textAlign: 'center'
});

export const ProfessionalApplications = () => {
  return (
    <ProfessionalApplicationsArea>
      <Typography variant="h2">Professional Applications I Have Worked On</Typography>
      <CardList data={data} />
    </ProfessionalApplicationsArea>
  );
};
