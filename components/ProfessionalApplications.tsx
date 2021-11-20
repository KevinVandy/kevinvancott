import { styled, Typography } from '@mui/material';
import CardList from './CardList';
import TMImage from '../public/apps/tm.webp';
import FUIImage from '../public/apps/fui.webp';
import TBImage from '../public/apps/tb.webp';
import ICImage from '../public/apps/ic.webp';
import RAImage from '../public/apps/ra.webp';
import CPImage from '../public/apps/cp.png';
import APImage from '../public/apps/ap.png';

const data = [
  {
    company: 'ALLO',
    name: 'Agent Portal',
    image: APImage,
    techStack: ['Nx', 'TypeScript', 'React', 'Material UI', 'GraphQL', 'Python'],
  },
  {
    company: 'ALLO',
    name: 'Customer Portal',
    link: 'https://customertest.allofiber.org/get-allo',
    image: CPImage,
    techStack: [
      'Nx',
      'TypeScript',
      'React',
      'Material UI',
      'GraphQL',
      'Python',
      'Elasticsearch',
    ],
  },
  {
    company: 'Talent Plus',
    name: 'TalentMine',
    link: 'https://talentmine.com/',
    image: TMImage,
    techStack: [
      'JavaScript',
      'React',
      'Material UI',
      'NodeJS',
      'Grails',
      'Groovy',
      'Elasticsearch',
    ],
  },
  {
    company: 'Talent Plus',
    name: 'TalentBank',
    link: 'https://core.talentbankonline.com',
    image: TBImage,
    techStack: ['Grails', 'Groovy', 'jQuery', 'Bootstrap', 'MySQL'],
  },
  {
    company: 'Talent Plus',
    name: 'Formation-UI',
    link: 'https://test-formation-ui.netlify.app/',
    image: FUIImage,
    techStack: ['JavaScript', 'React', 'Material UI', 'Storybook'],
  },
  {
    company: 'State of Nebraska',
    name: 'ICHARTS',
    link: 'https://dhhs-icharts1.ne.gov/iCharts/',
    image: ICImage,
    techStack: ['Java', 'jQuery', 'Tomahawk', 'COBOL', 'DB2'],
  },
  {
    company: 'State of Nebraska',
    name: 'RMNPA',
    link: 'https://dhhs-rmnpa.ne.gov/RMNPAApp/',
    image: RAImage,
    techStack: ['Java', 'jQuery', 'PrimeFaces', 'COBOL', 'DB2'],
  },
];

const ProfessionalApplicationsArea = styled('div')({
  margin: '2rem auto',
  maxWidth: '1400px',
  textAlign: 'center',
});

export const ProfessionalApplications = () => {
  return (
    <ProfessionalApplicationsArea>
      <Typography variant="h4">Professional Applications I Have Worked On</Typography>
      <CardList data={data} />
    </ProfessionalApplicationsArea>
  );
};
