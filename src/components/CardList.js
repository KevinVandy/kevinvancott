import React, { useState } from 'react';
import { styled, Typography, Card } from '@material-ui/core';
import { ProjectModal } from './ProjectModal';

const CardListSection = styled('section')({
  display: 'block',
  padding: '3rem',
  overflowX: 'auto'
});

const StyledCard = ({ length, zIndex, ...rest }) => {
  const StyledCardRaw = styled(Card)({
    width: `${1600 / length}px`,
    height: '300px',
    zIndex: zIndex
  });
  return <StyledCardRaw {...rest} />;
};

const ImageContainer = styled('div')({
  width: '100%',
  overflow: 'hidden',
  marginTop: '3rem'
});

export const CardList = ({ data }) => {
  const [currentProject, setCurrentProject] = useState();
  const [open, setOpen] = useState(false);

  const handleCardClick = (project) => {
    setCurrentProject(project);
    setOpen(true);
  };

  return (
    <>
      <CardListSection>
        <div className="card-list">
          {data.map((project, i) => (
            <StyledCard
              className="card"
              key={i}
              length={data.length}
              zIndex={data.length + 1 - i}
              onClick={() => handleCardClick(project)}
            >
              <Typography style={{ margin: '1rem' }} variant="h4">
                {project.name}
              </Typography>
              <ImageContainer>
                <img
                  style={{ width: '100%' }}
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                />
              </ImageContainer>
            </StyledCard>
          ))}
        </div>
      </CardListSection>
      <ProjectModal open={open} project={currentProject} handleClose={() => setOpen(false)} />
    </>
  );
};
