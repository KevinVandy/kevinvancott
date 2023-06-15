import { styled, Typography } from '@mui/material';
import CardList from './CardList';
import MMImage from '../public/apps/mm.png';
import JEImage from '../public/apps/je.webp';
import WWImage from '../public/apps/ww.webp';
import POImage from '../public/apps/po.png';
import UPImage from '../public/apps/up.webp';
import MRTImage from '../public/apps/mrt.png';
import MRT2Image from '../public/apps/mrt2.png';

const data = [
  {
    name: 'Mantine React Table',
    link: 'https://mantine-react-table.com',
    image: MRT2Image,
    techStack: ['TypeScript', 'React', 'NextJS', 'Mantine', 'Storybook'],
  },
  {
    name: 'Material React Table',
    link: 'https://material-react-table.com',
    image: MRTImage,
    techStack: ['TypeScript', 'React', 'NextJS', 'Material UI', 'Storybook'],
  },
  {
    name: 'Multi-Monitor Calculator',
    link: 'https://multimonitorcalculator.com/',
    image: MMImage,
    techStack: ['TypeScript', 'Svelte', 'Svelte Material UI', 'SASS'],
  },
  {
    name: 'Portfolio',
    link: 'https://kevinvancott.com/',
    image: POImage,
    techStack: ['TypeScript', 'React', 'NextJS', 'Material UI'],
  },
  {
    name: 'Jeopardy 2019',
    link: 'https://github.com/KevinVandy/jeopardy',
    image: JEImage,
    techStack: ['C#.NET', 'MS Access'],
  },
  {
    name: 'Weather Wolf',
    link: 'https://github.com/KevinVandy/WeatherWolf-Grails',
    image: WWImage,
    techStack: ['Groovy', 'Grails', 'MySQL', 'jQuery'],
  },
  {
    name: 'µPlanner ',
    link: 'https://github.com/KevinVandy/uPlanner',
    image: UPImage,
    techStack: ['JavaScript', 'PHP', 'MySQL'],
  },
];

const PersonalProjectsArea = styled('div')({
  margin: '2rem auto',
  maxWidth: '1400px',
  textAlign: 'center',
});

export const PersonalProjects = () => {
  return (
    <PersonalProjectsArea>
      <Typography variant="h4">My Personal Project Highlights</Typography>
      <CardList data={data} />
    </PersonalProjectsArea>
  );
};
