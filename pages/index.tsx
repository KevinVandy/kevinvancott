import { createTheme, ThemeProvider } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { TimelineArea } from '../components/TimelineArea';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kevin Van Cott - Software Engineer</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Header />
      {/* <ThemeProvider theme={createTheme()}> */}
      <main>
        <Skills />
        <Projects />
        <TimelineArea />
      </main>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Home;
