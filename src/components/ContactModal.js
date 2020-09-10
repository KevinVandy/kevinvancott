
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

export const ContactModal = ({ open, handleClose }) => {
  const theme = useTheme();

  const ContactItem = styled(Typography)({
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

  return (
    <Dialog maxWidth="sm" onBackdropClick={handleClose} open={open}>
      <DialogTitle>Contact Kevin Van Cott</DialogTitle>
      <DialogContent>
        <ContactItem>
          Email:{' '}
          <StyledLink href="mailto:vancottkevin@gmail.com">
            vancottkevin@gmail.com
          </StyledLink>
        </ContactItem>
        <ContactItem>
          LinkedIn:{' '}
          <StyledLink
            href="https://www.linkedin.com/in/kevinthomasvancott/"
            target="_blank"
            rel="noreferrer"
          >
            Kevin Thomas Van Cott
          </StyledLink>
        </ContactItem>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};