import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { PersonalProjects } from './PersonalProjects';
import { ProfessionalApplications } from './ProfessionalApplications';
import WaveBottom from './WaveBottom';
import WaveTop from './WaveTop';

const ProjectsSection = styled('section')({
  minHeight: '600px',
  position: 'relative',
  paddingBottom: '2rem',
});

const Title = styled(Typography)({
  textAlign: 'center',
  padding: '1rem',
});

const Projects = () => {
  return (
    <ProjectsSection className="background-horizontal">
      <WaveTop />
      <div style={{ paddingTop: '6rem', margin: 'auto' }}>
        <Title variant="h3">What I&rsquo;ve Made</Title>
        <ProfessionalApplications />
        <PersonalProjects />
      </div>
      <WaveBottom />
    </ProjectsSection>
  );
};

export default Projects;
