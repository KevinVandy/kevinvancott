import { Fade, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import WaveStyles from '../styles/Wave.module.css';
import ProfilePic from '../public/profile.jpg';
import WaveBottom from './WaveBottom';

const HeaderContainer = styled('header')({
  height: '450px',
});

const HelloTitle = styled(Typography)({
  textAlign: 'center',
  padding: '2rem',
  fontSize: '6rem',
  '@media(max-width: 600px)': {
    fontSize: '4rem',
  },
});

const JobTitle = styled(Typography)({
  textAlign: 'center',
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
