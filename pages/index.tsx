import type { NextPage } from 'next';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Resources from '../components/Resources';
import Skills from '../components/Skills';
import { TimelineArea } from '../components/TimelineArea';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Projects />
        <Resources />
        <TimelineArea />
      </main>
    </>
  );
};

export default Home;
