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

const Projects = () => {
  return (
    <ProjectsSection className="background-horizontal">
      <WaveTop />
      <div style={{ paddingTop: '5rem', margin: 'auto' }}>
        <ProfessionalApplications />
        <PersonalProjects />
      </div>
      <WaveBottom />
    </ProjectsSection>
  );
};

export default Projects;
