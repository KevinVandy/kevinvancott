import { FC } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import { skillImgs } from './Skills';

const StyledLink = styled('a')(({ theme }) => ({
  fontWeight: 'bold',
  textDecoration: 'none',
}));

const SkillGrid = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  margin: 'auto',
  textAlign: 'center',
  justifyContent: 'center',
});

const SkillTitle = styled(Typography)({
  textAlign: 'center',
  padding: '1rem',
});

const SkillContainer = styled('div')({
  height: '120px',
  width: '120px',
  margin: '1rem 0',
  textAlign: 'center',
});

const ImgContainer = styled('div')({
  transition: 'all 200ms ease-in-out',
  cursor: 'pointer',
  margin: 'auto',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const Item = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: '2rem',
});

interface ProjectModalProps {
  open: boolean;
  handleClose: () => void;
  project: any;
}

export const ProjectModal: FC<ProjectModalProps> = ({ open, handleClose, project }) => {
  if (!project) return null;

  return (
    <Dialog maxWidth="lg" onBackdropClick={handleClose} open={open}>
      <DialogTitle style={{ textAlign: 'center' }}>
        <Typography variant="h2">{project.name}</Typography>
      </DialogTitle>
      <DialogContent>
        <Item>
          Link:{' '}
          <StyledLink href={project.link} target="_blank">
            {project.link}
          </StyledLink>
        </Item>
        <Item>
          <SkillGrid>
            {skillImgs
              .filter((skill) =>
                project.techStack
                  .map((techSkill: string) => techSkill.toLowerCase())
                  .includes(skill.name.toLowerCase()),
              )
              .map((skill, i) => (
                <SkillContainer title={skill.name} key={i}>
                  <ImgContainer>
                    <Image
                      width={skill.width}
                      height={skill.height}
                      alt={skill.name}
                      src={skill.src}
                    />
                  </ImgContainer>
                  <SkillTitle>{skill.name}</SkillTitle>
                </SkillContainer>
              ))}
          </SkillGrid>
          <Image src={project.image} alt={project.name} loading="lazy" />
        </Item>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
