import React from 'react';
import {
  AppBar,
  Toolbar as MuiToolbar,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const theme = useTheme();

  const NavbarSpacer = styled('div')({
    width: '100%',
    height: '100px',
  });

  const Toolbar = styled(MuiToolbar)({
    display: 'grid',
    gridTemplateColumns: '2rem auto auto',
    gridGap: '1rem',
    padding: '0 2rem'
  })

  const Links = styled('div')({
    alignContent: 'end',
    display: 'grid',
    gridGap: '2rem',
    gridTemplateColumns: 'auto 4rem',
    textAlign: 'right',
    width: '100%'
  });

  const StyledLink = styled(Link)({
    color: 'white',
    fontWeight: '700',
    textDecoration: 'none',
    transitionDuration: '300ms',
    '&:visited': {
      color: 'white',
    },
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  });

  return (
    <>
      <NavbarSpacer />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start">
            <MenuIcon style={{ color: '#fff' }} />
          </IconButton>
          <Typography variant="h4">Portfolio</Typography>
          <Links>
            <Typography variant="h6">
              <StyledLink to="/">Home</StyledLink>
            </Typography>
            <Typography variant="h6">
              <StyledLink to="/">Contact</StyledLink>
            </Typography>
          </Links>
        </Toolbar>
      </AppBar>
    </>
  );
};
