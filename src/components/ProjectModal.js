import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  styled,
  useTheme
} from '@material-ui/core';

export const ProjectModal = ({ open, handleClose, project }) => {
  const theme = useTheme();

  const Item = styled(Typography)({
    fontSize: '1.2rem',
    lineHeight: '2rem'
  });

  const StyledLink = styled('a')({
    color: 'black',
    fontWeight: '700',
    textDecoration: 'none',
    transitionDuration: '300ms',
    '&:visited': {
      color: 'black'
    },
    '&:hover': {
      color: theme.palette.primary.main
    }
  });

  const StyledTypography = styled(Typography)({
    lineHeight: '1.5rem',
    padding: '0.5rem 0',
    display: 'inline'
  });

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
          <StyledTypography variant="h5">{project.techStack}</StyledTypography>
          <img
            style={{ width: '100%' }}
            src={project.image}
            alt={project.name}
            loading="lazy"
          />
        </Item>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
