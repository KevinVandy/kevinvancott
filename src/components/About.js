import React from 'react';
import { Typography, styled } from '@material-ui/core';

const HelloWorld = styled(Typography)({
  textAlign: 'center',
  margin: 'auto'
});

export const About = () => {
  return <HelloWorld>Hello World, I'm Kevin</HelloWorld>;
};
