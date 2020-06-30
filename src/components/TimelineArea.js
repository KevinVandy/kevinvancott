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
import {
  Typography,
  Card as MuiCard,
  styled,
  Slide,
  Fade,
  Grow
} from '@material-ui/core';

const Card = styled(MuiCard)({
  padding: '1rem'
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
              <Typography variant="body1"></Typography>• Formation-UI – React Component
              Library based on Material-UI with Storybook Collaborated with Design team to
              implement a new React Component Library to share common front-end code
              between all projects and define a design system to unify the look and feel
              between applications. Helped lead a new Accessibility focus for all our
              React applications. Setup Rollup, Babel and Webpack configurations. Created
              a Storybook for documentation and interactive isolated development of
              components. • TalentMine – React PWA with Node.js serverless AWS lambdas,
              Grails Restful APIs Updated front-end features using Material-UI, Formik,
              Highcharts, and many other React libraries. Modified AWS Serverless Lambda
              APIs to interact with DynamoDB NoSQL databases and send email notifications
              via Postmark. Created and maintained unit tests with Jest. Created a new
              multi-threaded back-end file processing service with Grails 4 and
              Elasticsearch. • TalentBank – Grails Web Application with Bootstrap and
              jQuery Created and maintained Restful APIs in the Grails framework, using
              GORM and SQL queries, while preserving security with Spring Security and
              Auth0. Added new front-end features using GSP server rendering, Bootstrap,
              and jQuery.
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
