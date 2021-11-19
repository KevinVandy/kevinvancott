import { Fade, Typography, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import ProfilePic from '../public/profile.jpg';
import LinkedInLogo from '../public/logos/linkedin.webp';
import GithubLogo from '../public/logos/githubalt.png';
import WaveBottom from './WaveBottom';

const HeaderContainer = styled('header')({
  height: '450px',
});

const HelloTitle = styled(Typography)({
  textAlign: 'center',
  paddingTop: '3rem',
  fontSize: '6rem',
  '@media(max-width: 600px)': {
    fontSize: '4rem',
  },
});

const JobTitle = styled(Typography)({
  textAlign: 'center',
  paddingTop: '1rem',
});

const QuickLinks = styled('div')({
  display: 'flex',
  position: 'absolute',
  top: '.1rem',
  right: '.1rem',
});

const Link = styled(MuiLink)({
  color: '#000',
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

const Header: FC = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [jobTitleVisible, setJobTitleVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 500);
    setTimeout(() => setJobTitleVisible(true), 1000);
  }, []);

  return (
    <HeaderContainer className="background-horizontal">
      <QuickLinks>
        <Link
          href="https://www.github.com/kevinvandy"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <Image alt="github" src={GithubLogo} height={20} width={20} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/kevinthomasvancott/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <Image alt="linkedin" src={LinkedInLogo} height={20} width={20} />
        </Link>
      </QuickLinks>
      <Fade in={titleVisible} timeout={1000}>
        <HelloTitle variant="h1">
          Hello World, <br />{' '}
          <span
            style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
          >
            <span style={{ paddingRight: '1rem' }}>I&rsquo;m Kevin</span>
            <Image
              alt="profile"
              height={100}
              width={100}
              src={ProfilePic}
              className="avatar"
            />
            <style jsx global>{`
              .avatar {
                border-radius: 50%;
                border: 2px solid #fff !important;
                margin-left: 1rem;
                transition: all 200ms ease-in-out !important;
              }

              .avatar:hover {
                border-width: 0 !important;
                transform: scale(1.01);
              }
            `}</style>
          </span>
        </HelloTitle>
      </Fade>
      <Fade in={jobTitleVisible} timeout={1000}>
        <JobTitle variantMapping={{ h4: 'h2' }} variant="h4">
          Full Stack Software Engineer
        </JobTitle>
      </Fade>
      <WaveBottom />
    </HeaderContainer>
  );
};

export default Header;
