import { FC } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/system';
import { skillImgs } from './Skills';

const StyledLink = styled('a')(({ theme }) => ({
  color: 'black',
  fontWeight: 'bold',
  textDecoration: 'none',
  transitionDuration: '300ms',
  '&:visited': {
    color: 'black',
  },
  // '&:hover': {
  //   color: theme.palette.primary.main,
  // },
}));

const StyledTypography = styled(Typography)({
  lineHeight: '1.5rem',
  padding: '0.5rem 0',
  display: 'inline',
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
    <Dialog maxWidth="md" onBackdropClick={handleClose} open={open}>
      <DialogTitle>
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
          Tech Stack:{' '}
          <StyledTypography variant="h5">{project.techStack.join(', ')}</StyledTypography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              padding: '1rem',
            }}
          >
            {skillImgs
              .filter((skill) =>
                project.techStack
                  .map((techSkill: string) => techSkill.toLowerCase())
                  .includes(skill.name.toLowerCase()),
              )
              .map((skill, i) => (
                <div title={skill.name} key={i}>
                  <Image
                    width={skill.width}
                    height={skill.height}
                    alt={skill.name}
                    src={skill.src}
                  />
                </div>
              ))}
          </div>
          <Image src={project.image} alt={project.name} loading="lazy" />
        </Item>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
