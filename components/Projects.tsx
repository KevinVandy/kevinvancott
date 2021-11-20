import { Fade, Slide, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
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
  const [titleVisible, setTitleVisible] = useState(false);
  const [pAVisible, setPAVisible] = useState(false);
  const [pPVisible, setPPVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 7000);
    setTimeout(() => setPAVisible(true), 7500);
    setTimeout(() => setPPVisible(true), 8000);
  }, []);

  return (
    <ProjectsSection className="background-horizontal">
      <WaveTop />
      <div style={{ paddingTop: '6rem', margin: 'auto' }}>
        <Fade in={titleVisible} timeout={1000}>
          <Slide in={titleVisible} timeout={1000} direction="left">
            <div>
              <Title variant="h3">What I&rsquo;ve Made</Title>
            </div>
          </Slide>
        </Fade>
        <Fade in={pAVisible} timeout={1000}>
          <Slide in={pAVisible} timeout={1000} direction="left">
            <div>
              <ProfessionalApplications />
            </div>
          </Slide>
        </Fade>
        <Fade in={pPVisible} timeout={1000}>
          <Slide in={pPVisible} timeout={1000} direction="left">
            <div>
              <PersonalProjects />
            </div>
          </Slide>
        </Fade>
      </div>
      <WaveBottom />
    </ProjectsSection>
  );
};

export default Projects;
