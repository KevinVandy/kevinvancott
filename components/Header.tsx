import { Fade, Typography, Link as MuiLink, Slide } from '@mui/material';
import { styled } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import ProfilePic from '../public/profile.jpg';
import LinkedInLogo from '../public/logos/linkedin.webp';
import GithubLogo from '../public/logos/githubalt.png';
import WaveBottom from './WaveBottom';

const HeaderContainer = styled('header')({
  minHeight: '450px',
  paddingBottom: '6rem',
});

const HelloTitle = styled(Typography)({
  textAlign: 'center',
  margin: '4rem auto 1rem auto',
  fontSize: '6rem',
  '@media(max-width: 900px)': {
    fontSize: '4rem',
  },
  '@media(max-width: 600px)': {
    fontSize: '3rem',
  },
  '@media(max-width: 420px)': {
    fontSize: '2.5rem',
  },
});

const JobTitle = styled(Typography)({
  textAlign: 'center',
  fontSize: '3rem',
  '@media(max-width: 900px)': {
    fontSize: '2.25rem',
  },
  '@media(max-width: 600px)': {
    fontSize: '1.75rem',
  },
  '@media(max-width: 420px)': {
    fontSize: '1.5rem',
  },
});

const SummaryTypography = styled(Typography)({
  textAlign: 'center',
  paddingTop: '1rem',
  display: 'flex',
  margin: '1rem auto',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
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
  const [summaryVisible, setSumaryVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 100);
    setTimeout(() => setJobTitleVisible(true), 1000);
    setTimeout(() => setSumaryVisible(true), 1500);
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
      <div style={{ display: titleVisible ? 'flex' : 'none' }}>
        <HelloTitle variant="h1" className="typewriter">
          Hello&nbsp;World, I&rsquo;m&nbsp;Kevin
        </HelloTitle>
      </div>
      <Fade in={jobTitleVisible} timeout={1000}>
        <Slide in={jobTitleVisible} direction="left" timeout={1000}>
          <div>
            <JobTitle variant="h2">Senior Software Engineer</JobTitle>
            <JobTitle sx={{ fontSize: '1.8em', lineHeight: '3rem' }} variant="h2">
              {' '}
              Open Source Maintainer and Contributor
            </JobTitle>
          </div>
        </Slide>
      </Fade>
      <Fade in={summaryVisible} timeout={1000}>
        <Slide in={summaryVisible} direction="left" timeout={1000}>
          <SummaryTypography variant="h2">
            <Typography
              variant="body1"
              style={{ textAlign: 'left', fontSize: '1.5rem', maxWidth: '26ch' }}
            >
              I care about writing{' '}
              <em>
                <strong>easy to use</strong>
              </em>
              , and{' '}
              <em>
                <strong>easy to maintain</strong>
              </em>{' '}
              software.
            </Typography>
            <Image
              alt="profile"
              height={100}
              width={100}
              src={ProfilePic}
              className="avatar"
            />
          </SummaryTypography>
        </Slide>
      </Fade>
      <WaveBottom />
    </HeaderContainer>
  );
};

export default Header;
