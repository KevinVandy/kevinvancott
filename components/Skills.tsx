import { Fade, Slide, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import HTMLLogo from '../public/logos/html.png';
import CSSLogo from '../public/logos/css.png';
import JSLogo from '../public/logos/javascript.png';
import TSLogo from '../public/logos/typescript.png';
import ReactLogo from '../public/logos/react.png';
import SvelteLogo from '../public/logos/svelte.png';
import JavaLogo from '../public/logos/java.png';
import GroovyLogo from '../public/logos/groovy.png';
import CSharpLogo from '../public/logos/csharp.png';
import GrailsLogo from '../public/logos/grails.png';
import NxLogo from '../public/logos/nx.png';
import ElasticSearchLogo from '../public/logos/elasticsearch.png';
import StorybookLogo from '../public/logos/storybook.png';
import CypressLogo from '../public/logos/cypress.jpg';
import MySqlLogo from '../public/logos/mysql.png';
import NodeJSLogo from '../public/logos/nodejs.png';
import jQueryLogo from '../public/logos/jquery.png';
import pythonLogo from '../public/logos/python.png';
import MUILogo from '../public/logos/mui.png';
import PHPLogo from '../public/logos/php.png';
import BootstrapLogo from '../public/logos/bootstrap.png';
import SMUILogo from '../public/logos/smui.png';
import GraphQLLogo from '../public/logos/graphql.png';
import AWSLogo from '../public/logos/aws.png';
import NextJsLogo from '../public/logos/nextjs.png';
import SASSLogo from '../public/logos/sass.png';
import Image from 'next/image';

export const skillImgs = [
  { src: HTMLLogo, name: 'HTML', width: 60, height: 60, featured: true },
  { src: CSSLogo, name: 'CSS', width: 45, height: 60, featured: true },
  { src: JSLogo, name: 'JavaScript', width: 100, height: 60, featured: true },
  { src: TSLogo, name: 'TypeScript', width: 60, height: 60, featured: true },
  { src: NodeJSLogo, name: 'NodeJS', width: 110, height: 60, featured: true },
  { src: ReactLogo, name: 'React', width: 90, height: 60, featured: true },
  { src: NextJsLogo, name: 'NextJS', width: 60, height: 60, featured: true },
  { src: SvelteLogo, name: 'Svelte', width: 50, height: 60, featured: true },
  { src: SASSLogo, name: 'SASS', width: 60, height: 60, featured: false },
  { src: MUILogo, name: 'Material UI', width: 60, height: 60, featured: true },
  { src: BootstrapLogo, name: 'Bootstrap', width: 90, height: 60, featured: false },
  { src: StorybookLogo, name: 'Storybook', width: 60, height: 60, featured: true },
  { src: CSharpLogo, name: 'C#.NET', width: 55, height: 60, featured: true },
  { src: JavaLogo, name: 'Java', width: 60, height: 60, featured: true },
  { src: GroovyLogo, name: 'Groovy', width: 80, height: 60, featured: true },
  { src: GrailsLogo, name: 'Grails', width: 60, height: 60, featured: true },
  { src: MySqlLogo, name: 'MySQL', width: 60, height: 60, featured: true },
  { src: NxLogo, name: 'Nx', width: 80, height: 60, featured: true },
  { src: jQueryLogo, name: 'jQuery', width: 100, height: 60, featured: false },
  { src: pythonLogo, name: 'Python', width: 60, height: 60, featured: false },
  { src: PHPLogo, name: 'PHP', width: 100, height: 60, featured: false },
  { src: SMUILogo, name: 'Svelte Material UI', width: 60, height: 60, featured: false },
  { src: CypressLogo, name: 'Cypress', width: 60, height: 60, featured: true },
  { src: AWSLogo, name: 'AWS', width: 80, height: 60, featured: true },
  {
    src: ElasticSearchLogo,
    name: 'ElasticSearch',
    width: 60,
    height: 60,
    featured: true,
  },
  { src: GraphQLLogo, name: 'GraphQL', width: 60, height: 60, featured: true },
];

const SkillsSection = styled('section')({
  minHeight: '300px',
  backgroundColor: '#000',
  position: 'relative',
  paddingBottom: '2rem',
  color: '#fff',
});

const SkillGrid = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  margin: 'auto',
  maxWidth: '1400px',
  paddingBottom: '3rem',
  textAlign: 'center',
  justifyContent: 'center',
});

const SkillTitle = styled(Typography)({
  textAlign: 'center',
  padding: '2rem',
});

const SkillContainer = styled('div')({
  height: '120px',
  width: '120px',
  marginTop: '1rem',
  textAlign: 'center',
});

const ImgContainer = styled('div')({
  transition: 'all 300ms ease-in-out',
  cursor: 'pointer',
  margin: 'auto',
  '&:hover': {
    transform: 'scale(1.2)',
  },
});

interface SkillProps {
  skill: any;
  index: number;
}

const Skill: FC<SkillProps> = ({ skill, index }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 4000 + 300 * ((index + 1) / 4));
  }, [index]);

  return (
    <div>
      <Slide direction="left" in={visible} timeout={1000}>
        <Fade in={visible}>
          <SkillContainer key={index}>
            <ImgContainer>
              <Image
                alt="html"
                src={skill.src}
                height={skill.height}
                width={skill.width}
              />
            </ImgContainer>
            <SkillTitle variant="subtitle1">{skill.name}</SkillTitle>
          </SkillContainer>
        </Fade>
      </Slide>
    </div>
  );
};

const Skills: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 3500);
  }, []);

  return (
    <SkillsSection>
      <Fade in={visible} timeout={1000}>
        <SkillTitle variant="h3">My Skills</SkillTitle>
      </Fade>
      <SkillGrid>
        {skillImgs
          .filter((s) => s.featured)
          .map((skill, i) => (
            <Skill key={i} skill={skill} index={i} />
          ))}
      </SkillGrid>
    </SkillsSection>
  );
};

export default Skills;
