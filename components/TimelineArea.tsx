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

export const TimelineArea: FC<any> = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  const [showTimelineCards, setShowTimelineCards] = useState<boolean[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setShowTimeline(true);
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
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
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography>December 2020 - Present</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard show={showTimelineCards.length > 0}>
                <Typography  variant="h3">
                  ALLO Communications
                </Typography>
                
                <Typography  variant="h4">
                  Software Engineer
                </Typography>
                <IndentedList>
                  <ListItem>
                    <Typography variant="h5">
                      Buyflow <i>React Applications with AWS AppSync (GraphQL) APIs </i>
                    </Typography>
                    <IndentedList>
                      <ListItem>
                        <Typography variant="body1">
                          Architecting and re-organizing all front-end code into a
                          monorepo structure with Nx to improve code reusability across
                          multiple react applications to increase feature delivery speed
                          and quality.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Designing and developing a new a portal to sell services to
                          customers.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Building a new admin portal for agents to manage orders and
                          provide admin tools.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Working directly with stakeholders to gather requirements and
                          demo new features.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Establishing unit and end-to-end testing systems with Jest,
                          Cypress, and Postman.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Pair programming with other developers and interns to teach
                          React, CSS, Accessibility best practices, clean code patterns,
                          and Test-Driven Development (TDD) mindsets.
                        </Typography>
                      </ListItem>
                    </IndentedList>
                  </ListItem>
                </IndentedList>
              </TimelineCard>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography>June 2019 - December 2020</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard show={showTimelineCards.length > 0}>
                <Typography  variant="h3">
                  Talent Plus, Inc
                </Typography>
                
                <Typography  variant="h4">
                  Full Stack Web Developer
                </Typography>
                <IndentedList>
                  <ListItem>
                    <Typography variant="h5">
                      Formation-UI – <i>React Component Library with Storybook</i>
                    </Typography>
                    <IndentedList>
                      <ListItem>
                        <Typography variant="body1">
                          Led new initiative to revamp the entire front-end development
                          process to focus on code reusability and implement an official
                          design system to unify the look and feel between all
                          applications.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Set up Rollup, Webpack, and Babel configurations and created
                          reusable React components with thorough API documentation using
                          Storybook.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Implemented multiple robust automated regression testing
                          systems.
                        </Typography>
                      </ListItem>
                    </IndentedList>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">
                      TalentMine –{' '}
                      <i>React Application with AWS Serverless Cloud Functions</i>
                    </Typography>
                    <IndentedList>
                      <ListItem>
                        <Typography variant="body1">
                          Modernized front-end features using Material-UI, Formik,
                          Highcharts, and many other React libraries.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Developed AWS Serverless Lambda APIs to interact with DynamoDB
                          NoSQL databases and send email notifications via Postmark.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Created and maintained unit tests.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Created a new multi-threaded back-end file processing service
                          with Grails 4 and Elasticsearch to help clients integrate new
                          users with the system much faster.
                        </Typography>
                      </ListItem>
                    </IndentedList>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">
                      TalentBank – <i>Grails Web Application with jQuery and Bootstrap</i>
                    </Typography>
                    <IndentedList>
                      <ListItem>
                        <Typography variant="body1">
                          Created and maintained Restful APIs in the Grails framework,
                          using GORM and SQL queries, while preserving security with
                          Spring Security and Auth0.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Added new front-end features using GSP server rendering,
                          Bootstrap, and jQuery.
                        </Typography>
                      </ListItem>
                    </IndentedList>
                  </ListItem>
                </IndentedList>
              </TimelineCard>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography>January - June 2019</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard show={showTimelineCards.length > 1}>
                <Typography  variant="h3">
                  State of Nebraska DHHS CHARTS
                </Typography>
                
                <Typography  variant="h4">
                  Full Stack Web Developer
                </Typography>
                <IndentedList>
                  <ListItem>
                    <Typography variant="h5">
                      ICHARTS – <i>Java Web Application</i>
                    </Typography>
                    <IndentedList>
                      <ListItem>
                        <Typography variant="body1">
                          Upgraded web application from Java 5 to Java 8.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Refactored the code structure to follow a modern MVC structure
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Upgraded the front-end from Tomahawk to PrimeFaces
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Added jQuery front-end validation, improved logging and
                          documentation.
                        </Typography>
                      </ListItem>
                    </IndentedList>
                  </ListItem>
                  <ListItem>
                    <Typography variant="h5">
                      RMNPA – <i>Java Web Application</i>
                    </Typography>
                    <IndentedList>
                      <ListItem>
                        <Typography variant="body1">
                          Simplified PDF report generation using Jasper Reports.
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant="body1">
                          Modified application using PrimeFaces JSF components, added
                          jQuery front-end validation.
                        </Typography>
                      </ListItem>
                    </IndentedList>
                  </ListItem>
                </IndentedList>
              </TimelineCard>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography>July 2017 - March 2019</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard show={showTimelineCards.length > 2}>
                <Typography variant="h5">Studied at SCC</Typography>
                <Typography variant="h6">
                  <i>Associate’s, Computer Information Technology</i>
                </Typography>
                Object-Oriented Programming skills for building web and desktop
                applications, using Java, C#.NET, PHP, JavaScript, SQL, HTML, CSS, and
                core Object-Oriented concepts for Agile Development.
              </TimelineCard>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography>2015 - 2017</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard show={showTimelineCards.length > 2}>
                <Typography variant="h5">
                  Studied at University of Nebraska-Lincoln
                </Typography>
                <Typography variant="h6">
                  <i>Undecided Engineering Student</i>
                </Typography>
                Studied Chemical Engineering and Computer Science.
              </TimelineCard>
            </TimelineContent>
          </TimelineItem>
        </StyledTimeline>
      </Fade>
    </TimelineSection>
  );
};
