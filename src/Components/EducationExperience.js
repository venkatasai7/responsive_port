import React, { useEffect } from 'react';
import NavBar from './NavBar';
import '../Styles/EducationExperience.css';
import { useInView } from 'react-intersection-observer';
import uablogo from '../images/organizations/uab.png';
import anitslogo from '../images/organizations/anits.jpg';
import tcslogo from '../images/organizations/tcsjpg.jpg';
import axiomlogo from '../images/organizations/axiom.jpg';

const educationExperiences = [
  {
    title: 'Master of Science in Computer Science',
    institution: 'University of Alabama at Birmingham',
    date: '2023 - present',
    location: 'Birmingham, USA',
    description: 'Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.',
    logo: uablogo
  },
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Anil Neerukonda Institute of Technology and Sciences',
    date: '2018 - 2022',
    location: 'Visakhapatnam, IND',
    description: 'Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.',
    logo: anitslogo
  }
];

const workExperiences = [
  {
    title: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    date: '2022 - 2023',
    location: 'Hyderabad, IND',
    description: 'Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.',
    logo: tcslogo
  },
  {
    title: 'Software Developer Engineer',
    company: 'Axiom io',
    date: '2021 - 2022',
    location: 'Secundrabad, IND',
    description: 'Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.Dive deep into aspects of computer science including algorithms, Machine Learning, and Deep Learning.',
    logo: axiomlogo
  }
];

const ExperienceCard = ({ experience }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div
      ref={ref}
      className={`card mb-3 ${inView ? 'slide-in' : ''}`}
      style={{ maxWidth: "100%", marginBottom: "2rem" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={experience.logo} className="img-fluid rounded-start" alt={`${experience.title} logo`} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{experience.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{experience.institution || experience.company}</h6>
            <p className="card-text">{experience.description}</p>
            <p className="card-text"><small className="text-muted">{experience.date} | {experience.location}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EducationExperience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="education-experience-container">
      <NavBar />
      <p className="NavLogo">Venkata Sai Kuniganti</p>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Work Experience</h2>
        {workExperiences.map((work, index) => (
          <ExperienceCard key={index} experience={work} />
        ))}
      </div>
      <div className="container" style={{ paddingTop: '2rem' }}>
        <h2 className="section-title">Education</h2>
        {educationExperiences.map((edu, index) => (
          <ExperienceCard key={index} experience={edu} />
        ))}
      </div>
    </div>
  );
};

export default EducationExperience;
