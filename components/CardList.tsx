import React, { useState, FC } from 'react';
import { styled, Typography, Card } from '@mui/material';
import { ProjectModal } from './ProjectModal';
import Image from 'next/image';
import CardListStyles from '../styles/CardList.module.css';

const CardListSection = styled('div')({
  display: 'block',
  padding: '3rem',
  overflowX: 'auto',
});

const StyledCard: FC<any> = ({ length, zIndex, ...rest }) => {
  const StyledCardRaw = styled(Card)({
    width: `${1600 / length}px`,
    height: '300px',
    zIndex: zIndex,
  });
  return <StyledCardRaw {...rest} />;
};

const ImageContainer = styled('div')({
  width: '100%',
  overflow: 'hidden',
  marginTop: '3rem',
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
        <div className={CardListStyles.cardList}>
          {data.map((project: any, i: number) => (
            <StyledCard
              className={CardListStyles.card}
              key={i}
              length={data.length}
              zIndex={data.length + 1 - i}
              onClick={() => handleCardClick(project)}
            >
              <Typography style={{ margin: '1rem' }} variant="h5">
                {project.name}
              </Typography>
              <ImageContainer>
                <Image src={project.image} alt={project.name} loading="lazy" />
              </ImageContainer>
            </StyledCard>
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
