import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { Button, Typography, Paper, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Styles/Timeline.css'


const events = [
  {
    type: 'education',
    date: '2023 - present',
    title: 'Master of Science in Computer Science',
    subtitle: 'University of Alabama at Birmingham',
    location: 'Birmingham, USA',
    description: 'Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep learning.',
    tags: ['ML', 'Adv. Algo.','Cloud','SQL'],
    buttonText: 'View Details',
    id: 'uabms'
  },
  {
    type: 'work',
    date: '2022 - 2023',
    title: 'Systems Engineer',
    subtitle: 'Tata Consultancy Services',
    location: 'Hyderabad, IND',
    description: 'Developing and maintaining web applications using React and Node.js.',
    tags: ['SQL','Python','ADF',],
    buttonText: 'View Details',
    id: 'tcs'
  },
  {
    type: 'work',
    date: '2021 - 2022',
    title: 'Software Developement Engineer',
    subtitle: 'Axiom io',
    location: 'Secundrabad, IND',
    description: 'Worked on various web development projects using JavaScript and Python.',
    tags: ['JS','front end','.NET'],
    buttonText: 'View Details',
    id: 'axiom'
  },
  {
    type: 'education',
    date: '2018 - 2022',
    title: 'Bachelor of Tech. in Information Technology',
    subtitle: 'Anil Neerukonda Institute of Technology and Sciences',
    location: 'Visakhapatnam, IND',
    description: 'Studied various aspects of computer science including algorithms, data structures, and software engineering.',
    tags: ['Computer Science', 'Algorithms', 'Data Structures'],
    buttonText: 'View Details',
    id: 'anitsug'
  },
  // Add more events here
];

const Timeline = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/education-experience/${id}`);
  };

  return (
    <div className="container">
      <div className="container my-3 d-flex justify-content-between align-items-center">
            <h1>Timeline (edu/exp)</h1>
         <button className="btn btn-dark" onClick={() => navigate('/education-experience')}>
          View in Detail
        </button> 
      </div>
      <VerticalTimeline lineColor="#9a9a9a">
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type}`}
            date={event.date}
            iconStyle={{ background: event.type === 'work' ? 'rgb(33, 150, 243)' : 'rgb(233, 30, 99)', color: '#fff' }}
            icon={event.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
          >
            <Paper elevation={0} className="timeline-card">
              <Typography variant="h6" component="h3">
                {event.title}
              </Typography>
              <Typography variant="subtitle1" component="h4">
                {event.subtitle} - {event.location}
              </Typography>
              <div>
                {event.tags.map((tag, index) => (
                  <Chip key={index} label={tag} style={{ margin: '5px' }} />
                ))}
              </div>
              <Button variant="contained" className='my-3' color="primary" onClick={() => handleViewDetails(event.id)}>
                {event.buttonText}
              </Button>
            </Paper>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
