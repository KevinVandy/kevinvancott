import React, { useState, useEffect } from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@material-ui/lab';
import { Typography, Card as MuiCard, styled, Fade, Grow } from '@material-ui/core';

const Card = styled(MuiCard)({
  padding: '1.5rem',
  lineHeight: '1.5rem'
});

const IndentedList = styled('ul')({
  marginLeft: '2rem',
  '@media max-width(600px)': {
    marginLeft: '-0.5rem'
  }
});

const TimelineCard = ({ children, show }) => {
  return (
    <Grow in={show} timeout={3000}>
      <Card>{children}</Card>
    </Grow>
  );
};

export const TimelineArea = () => {
  const [showTimeline, setShowTimeline] = useState(false);
  const [showTimelineCards, setShowTimelineCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setShowTimeline(true);
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            showTimelineCards.push(true);
            setShowTimelineCards([...showTimelineCards]);
          }, i * 1000);
        }
      }, 1000);
    }, 1000);

    //eslint-disable-next-line
  }, []);

  return (
    <Fade in={showTimeline} timeout={2000}>
      <Timeline align="left">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">June 2019 - Present</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard show={showTimelineCards.length > 0}>
              <Typography style={{ display: 'inline' }} variant="h5">
                Talent Plus, Inc
              </Typography>
              {' - '}
              <Typography style={{ display: 'inline' }} variant="h6">
                Full Stack Web Developer
              </Typography>
              <IndentedList>
                <li>
                  <h5>
                    Formation-UI – <i>React Component Library with Storybook</i>
                  </h5>
                  <IndentedList>
                    <li>
                      <Typography variant="body1">
                        Led new initiative to revamp the entire front-end development
                        process to focus on code reusability and implement an official
                        design system to unify the look and feel between all applications.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Set up Rollup, Webpack, and Babel configurations and created
                        reusable React components with thorough API documentation using
                        Storybook.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Implemented multiple robust automated regression testing systems.
                      </Typography>
                    </li>
                  </IndentedList>
                </li>
                <li>
                  <h5>
                    TalentMine –{' '}
                    <i>React Application with AWS Serverless Cloud Functions</i>
                  </h5>
                  <IndentedList>
                    <li>
                      <Typography variant="body1">
                        Modernized front-end features using Material-UI, Formik,
                        Highcharts, and many other React libraries.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Developed AWS Serverless Lambda APIs to interact with DynamoDB
                        NoSQL databases and send email notifications via Postmark.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Created and maintained unit tests.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Created a new multi-threaded back-end file processing service with
                        Grails 4 and Elasticsearch to help clients integrate new users
                        with the system much faster.
                      </Typography>
                    </li>
                  </IndentedList>
                </li>
              </IndentedList>
            </TimelineCard>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">January - June 2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard show={showTimelineCards.length > 1}>
              <Typography style={{ display: 'inline' }} variant="h6">
                State of Nebraska - DHHS CHARTS
              </Typography>
              {' - '}
              <Typography style={{ display: 'inline' }} variant="h6">
                Full Stack Web Developer
              </Typography>
              <Typography variant="body1"></Typography>• ICHARTS – Java Web Application
              with PrimeFaces Upgraded web application from Java 5 to Java 8. Refactored
              the code structure to follow a modern MVC structure, upgraded the front-end
              from Tomahawk to PrimeFaces, added jQuery front-end validation, improved
              logging and documentation. • RMNPA – Java Web Application with PrimeFaces
              Simplified PDF report generation using Jasper Reports. Modified application
              using PrimeFaces JSF components, added jQuery front-end validation error
              messages.
            </TimelineCard>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">July 2017 - March 2019</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <TimelineCard show={showTimelineCards.length > 2}>
              <Typography variant="h6">Studied at SCC</Typography>
              Object-Oriented Programming skills for building web and desktop
              applications, using Java, C#.NET, PHP, JavaScript, SQL, HTML, CSS, and core
              Object-Oriented concepts for Agile Development.
            </TimelineCard>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Fade>
  );
};
