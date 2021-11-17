import type { NextPage } from 'next';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { TimelineArea } from '../components/TimelineArea';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Projects />
        <TimelineArea />
      </main>
    </>
  );
};

export default Home;
