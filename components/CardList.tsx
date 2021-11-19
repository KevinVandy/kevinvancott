import React, { useState, FC } from 'react';
import { styled, Typography, Card } from '@mui/material';
import { ProjectModal } from './ProjectModal';
import Image from 'next/image';

const CardListSection = styled('div')({
  display: 'block',
  padding: '3rem',
  overflowX: 'auto',
});

const ImageContainer = styled('div')({
  marginTop: '3rem',
  overflow: 'hidden',
  width: '100%',
});

const CardList: FC<any> = ({ data }) => {
  const [currentProject, setCurrentProject] = useState();
  const [open, setOpen] = useState(false);

  const handleCardClick = (project: any) => {
    setCurrentProject(project);
    setOpen(true);
  };

  return (
    <>
      <CardListSection>
        <div className="cardList">
          {data.map((project: any, i: number) => (
            <Card
              className="card"
              key={i}
              onClick={() => handleCardClick(project)}
              style={{
                width: `${130 + 1800 / data.length}px`,
                height: '350px',
                zIndex: data.length + 1 - i,
              }}
            >
              <Typography style={{ margin: '1rem' }} variant="h5">
                {project.name}
              </Typography>
              {project.company && (
                <Typography style={{ margin: '0' }} variant="caption">
                  <em>{project.company}</em>
                </Typography>
              )}
              <ImageContainer>
                <Image src={project.image} alt={project.name} loading="lazy" />
              </ImageContainer>
            </Card>
          ))}
        </div>
      </CardListSection>
      <ProjectModal
        open={open}
        project={currentProject}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default CardList;
