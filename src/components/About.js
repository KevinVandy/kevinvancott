import React from 'react';
import { Typography, styled } from '@material-ui/core';

const HelloWorld = styled(Typography)({
  textAlign: 'center',
  margin: 'auto',
  maxWidth: '45ch', lineHeight: '2rem', padding: '1rem'
});

export const About = () => {
  return (
    <>
      <HelloWorld variant="h1">Hello World, I'm Kevin. </HelloWorld>
      <HelloWorld variant="h2">
        I’m a JavaScript developer who cares about writing easy to use and easy to
        maintain software.
      </HelloWorld>
      <HelloWorld variant="h3">
        I work hard to find creative and efficient solutions to hard problems, and I love
        staying up to date with the ever-evolving tech industry.
      </HelloWorld>
    </>
  );
};
