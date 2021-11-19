import { Link as MuiLink, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import LinkedInLogo from '../public/logos/linkedin.webp';
import GithubLogo from '../public/logos/github.webp';
import TwitterLogo from '../public/logos/twitter.png';
import YouTubeLogo from '../public/logos/youtube.png';

const ResourcesSection = styled('section')({
  position: 'relative',
  minHeight: '200px',
  backgroundColor: '#000',
  color: '#fff',
});

const Title = styled(Typography)({
  textAlign: 'center',
  padding: '1rem',
});

const LinkGrid = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '3rem',
  padding: '1rem',
});

const Link = styled(MuiLink)({
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '1rem',
  gap: '0.5rem',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const Resources = () => {
  return (
    <ResourcesSection>
      <Title variant="h3">Where To Find Me</Title>
      <LinkGrid>
        <Link
          href="https://www.github.com/kevinvandy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: '-1rem' }}
        >
          <Image alt="github" src={GithubLogo} height={60} width={110} />
          <span>Github</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/kevinthomasvancott/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="linkedin" src={LinkedInLogo} height={60} width={60} />
          <span>LinkedIn</span>
        </Link>
        <Link
          href="https://twitter.com/thomasvancott"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="twitter" src={TwitterLogo} height={60} width={60} />
          <span>Twitter</span>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCracg24oKriqN9pVhGiopqg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="twitter" src={YouTubeLogo} height={60} width={60} />
          <span>YouTube</span>
        </Link>
      </LinkGrid>
    </ResourcesSection>
  );
};

export default Resources;
