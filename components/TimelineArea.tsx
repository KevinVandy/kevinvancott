import { useState, useEffect, FC } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import WaveStyles from '../styles/Wave.module.css';
import { Typography, Card as MuiCard, styled, Fade, Grow } from '@mui/material';

const TimelineSection = styled('section')({
  background: '#000',
  color: '#fff',
  padding: '1rem',
  position: 'relative',
  paddingBottom: '500px',
});

const Card = styled(MuiCard)({
  padding: '1.5rem',
  lineHeight: '1.5rem',
  margin: '0.5rem',
  maxWidth: '100ch',
});

const StyledTimeline = styled(Timeline)({
  marginLeft: '-50%',
});

const IndentedList = styled('ul')({
  marginLeft: '2rem',
  '@media max-width(600px)': {
    marginLeft: '-0.5rem',
  },
});

const ListItem = styled('li')({
  padding: '0.25rem',
});

const TimelineCard: FC<any> = ({ children, show }) => {
  return (
    <Grow in={show} timeout={3000}>
      <Card>{children}</Card>
    </Grow>
  );
};

const jobs = [
  {
    dateRange: 'December 2020 - Present',
    company: 'ALLO Communications',
    title: 'Software Engineer',
    projects: [
      {
        name: 'ALLO Portals',
        description: 'React Applications with AWS AppSync (GraphQL) APIs',
        techStack: ['AWS', 'TypeScript', 'React', 'GraphQL', 'Python'],
        accomplishments: [
          'Architected and re-organized all front-end code into a monorepo structure with Nx to improve code reusability across multiple react applications, and to increase feature delivery speed and quality.',
          'Designed and developed a new customer portal to sell services to customers.',
          'Built a new admin portal for internal use to manage orders and provide admin tools.',
          'Worked directly with stakeholders to gather requirements and demo new features.',
          'Established unit and end-to-end testing systems with Jest, Cypress, and Postman.',
          'Automated AWS S3 deployment, testing, and security audits with Gitlab Pipelines.',
          'Mentored and pair programmed with other developers to teach best practices, clean code patters, accessibility, and Test-Driven Development (TDD) mindsets.',
        ],
      },
    ],
  },
  {
    dateRange: 'June 2019 - December 2020',
    company: 'Talent Plus, Inc',
    title: 'Software Developer',
    projects: [
      {
        name: 'TalentMine',
        description: 'React App with AWS Node.js Lambdas and Grails Microservices',
        techStack: ['AWS', 'JavaScript', 'React', 'Node.js', 'Groovy', 'Grails'],
        accomplishments: [
          'Created a new heavy lifting back-end processing service to automate integrating up to 100,000 new users at once within a minute to ease new client integrations.',
          'Used Multi-Threading (Thread Pooling) to run computationally expensive groovy backend tasks in parallel that resulted in up to 90% latency improvements.',
          'Used Elasticsearch to index large user datasets and improve data access times.',
          'Developed AWS Lambda Node.js APIs to interact with DynamoDB NoSQL databases.',
          'Continuously developed new front-end features following Material Design Principles.',
        ],
      },
      {
        name: 'TalentBank',
        description: 'Grails (Groovy) Web Application with Bootstrap and jQuery',
        techStack: ['Groovy', 'Grails', 'Bootstrap', 'jQuery', 'MySQL'],
        accomplishments: [
          'Created and maintained Restful APIs in the Grails framework, using GORM and SQL.',
          'Added new front-end features using Groovy Server Pages, Bootstrap, and jQuery.',
        ],
      },
      {
        name: 'Formation-UI',
        description: 'React Component Library with Storybook',
        techStack: ['JavaScript', 'React', 'Material UI', 'Storybook'],
        accomplishments: [
          'Led a new initiative to revamp the front-end development process to focus on code reusability, consistency, accessibility, and to implement an official design system to unify UI/UX between all React applications.',
          'Set up TypeScript, Rollup, Webpack, Babel, and other JS package configurations.',
          'Created reusable React components following React’s Composition and Common Abstraction principles and generated thorough documentation with Storybook.',
        ],
      },
    ],
  },
  {
    dateRange: 'January - June 2019',
    company: 'State of Nebraska - DHHS',
    title: 'IT Applications Developer',
    projects: [
      {
        name: 'ICHARTS',
        description: 'Java Web Application',
        techStack: ['React', 'Redux', 'Node', 'Express', 'MongoDB'],
        accomplishments: [
          'Upgraded web application from Java 5 to Java 8 and the front-end PrimeFaces libraries.',
          'Refactored the back-end code structure to follow a modern MVC pattern.',
        ],
      },
      {
        name: 'RMNPA',
        description: 'Java Web Application',
        techStack: ['React', 'Redux', 'Node', 'Express', 'MongoDB'],
        accomplishments: [
          'Upgraded PDF Generation with Jasper Reports and added new data fields.',
        ],
      },
    ],
  },
  {
    dateRange: '2017 - 2019',
    company: 'Southeast Community College',
    title: 'Associate’s, Computer Information Technology',
    projects: [],
  },
  {
    dateRange: '2015 - 2017',
    company: 'University of Nebraska - Lincoln',
    title: 'Undecided Engineering Student',
    projects: [],
  },
];

export const TimelineArea: FC<any> = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  const [showTimelineCards, setShowTimelineCards] = useState<boolean[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setShowTimeline(true);
      setTimeout(() => {
        for (let i = 0; i < jobs.length; i++) {
          setTimeout(() => {
            showTimelineCards.push(true);
            setShowTimelineCards([...showTimelineCards]);
          }, i * 1000);
        }
      }, 1000);
    }, 3000);
    //eslint-disable-next-line
  }, []);

  return (
    <TimelineSection>
      <Fade in={showTimeline} timeout={2000}>
        <StyledTimeline>
          {jobs.map((job, jobIndex) => (
            <TimelineItem key={jobIndex}>
              <TimelineOppositeContent>
                <Typography>{job.dateRange}</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineCard show={showTimelineCards.length > jobIndex}>
                  <Typography variant="h3">{job.company}</Typography>
                  <Typography variant="h4">{job.title}</Typography>
                  <IndentedList>
                    {job?.projects?.map?.((project, projectIndex) => (
                      <ListItem key={projectIndex}>
                        <Typography variant="h5">
                          {project.name}
                          {' - '}
                          <i>{project?.description}</i>
                        </Typography>
                        <IndentedList>
                          {project?.accomplishments?.map?.(
                            (accomplishment, accomplishmentIndex) => (
                              <ListItem key={accomplishmentIndex}>
                                <Typography variant="body1">{accomplishment}</Typography>
                              </ListItem>
                            ),
                          )}
                        </IndentedList>
                      </ListItem>
                    ))}
                  </IndentedList>
                </TimelineCard>
              </TimelineContent>
            </TimelineItem>
          ))}
        </StyledTimeline>
      </Fade>
    </TimelineSection>
  );
};
