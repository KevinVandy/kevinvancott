import { FC } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Grow,
} from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import { skillImgs } from './Skills';
import CloseIcon from '@mui/icons-material/Close';

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
  textAlign: 'center',
});

interface ProjectModalProps {
  open: boolean;
  handleClose: () => void;
  project: any;
}

export const ProjectModal: FC<ProjectModalProps> = ({ open, handleClose, project }) => {
  if (!project) return null;

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'rgba(33,33,33,.9)',
          color: '#fff',
          backdropFilter: 'blur(12px)',
        },
      }}
      TransitionComponent={Grow}
      TransitionProps={{ timeout: 500 }}
      maxWidth="lg"
      onBackdropClick={handleClose}
      open={open}
    >
      <IconButton
        style={{ position: 'absolute', top: '1rem', right: '1rem', color: '#fff' }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
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
        <Button style={{ color: '#fff' }} onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
