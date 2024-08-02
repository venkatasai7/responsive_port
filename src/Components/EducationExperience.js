import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { useInView } from 'react-intersection-observer';
import uablogo from '../images/organizations/uab.png';
import anitslogo from '../images/organizations/anits.jpg';
import tcslogo from '../images/organizations/tcsjpg.jpg';
import axiomlogo from '../images/organizations/axiom.jpg';
import '../Styles/EducationExperience.css';
import Spinner from './Spinner';



const educationExperiences = [
  {
    title: 'Master of Science in Computer Science',
    institution: 'University of Alabama at Birmingham',
    date: '2023 - present',
    location: 'Birmingham, USA',
    description: 'In an era defined by rapid technological advancements and constant innovation, the ability to adapt and evolve is more crucial than ever. Our initiative is designed to navigate this ever-changing landscape by seamlessly integrating the latest technologies with practical, real-world applications. We are committed to a holistic approach that combines cutting-edge research with hands-on implementation, ensuring that our solutions not only meet current demands but also anticipate future needs. By embracing a culture of continuous learning and fostering an environment of collaboration and creativity, we aim to drive transformative change. Our team of experts is dedicated to addressing complex challenges, from optimizing operational efficiencies to enhancing user experiences. Through our strategic focus on innovation, we seek to empower businesses and individuals alike, equipping them with the tools and knowledge needed to thrive in a competitive and dynamic world. By bridging the gap between emerging technologies and practical solutions, we aspire to make a meaningful impact and pave the way for future advancements.',
    logo: uablogo,
    id: 'uabms'
  },
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Anil Neerukonda Institute of Technology and Sciences',
    date: '2018 - 2022',
    location: 'Visakhapatnam, IND',
    description: 'In an era defined by rapid technological advancements and constant innovation, the ability to adapt and evolve is more crucial than ever. Our initiative is designed to navigate this ever-changing landscape by seamlessly integrating the latest technologies with practical, real-world applications. We are committed to a holistic approach that combines cutting-edge research with hands-on implementation, ensuring that our solutions not only meet current demands but also anticipate future needs. By embracing a culture of continuous learning and fostering an environment of collaboration and creativity, we aim to drive transformative change. Our team of experts is dedicated to addressing complex challenges, from optimizing operational efficiencies to enhancing user experiences. Through our strategic focus on innovation, we seek to empower businesses and individuals alike, equipping them with the tools and knowledge needed to thrive in a competitive and dynamic world. By bridging the gap between emerging technologies and practical solutions, we aspire to make a meaningful impact and pave the way for future advancements.',
    logo: anitslogo,
    id: 'anitsug'
  }
];

const workExperiences = [
  {
    title: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    date: '2022 - 2023',
    location: 'Hyderabad, IND',
    description: 'In an era defined by rapid technological advancements and constant innovation, the ability to adapt and evolve is more crucial than ever. Our initiative is designed to navigate this ever-changing landscape by seamlessly integrating the latest technologies with practical, real-world applications. We are committed to a holistic approach that combines cutting-edge research with hands-on implementation, ensuring that our solutions not only meet current demands but also anticipate future needs. By embracing a culture of continuous learning and fostering an environment of collaboration and creativity, we aim to drive transformative change. Our team of experts is dedicated to addressing complex challenges, from optimizing operational efficiencies to enhancing user experiences. Through our strategic focus on innovation, we seek to empower businesses and individuals alike, equipping them with the tools and knowledge needed to thrive in a competitive and dynamic world. By bridging the gap between emerging technologies and practical solutions, we aspire to make a meaningful impact and pave the way for future advancements.',
    logo: tcslogo,
    id: 'tcs'
  },
  {
    title: 'Software Developer Engineer',
    company: 'Axiom io',
    date: '2021 - 2022',
    location: 'Secundrabad, IND',
    description: 'In an era defined by rapid technological advancements and constant innovation, the ability to adapt and evolve is more crucial than ever. Our initiative is designed to navigate this ever-changing landscape by seamlessly integrating the latest technologies with practical, real-world applications. We are committed to a holistic approach that combines cutting-edge research with hands-on implementation, ensuring that our solutions not only meet current demands but also anticipate future needs. By embracing a culture of continuous learning and fostering an environment of collaboration and creativity, we aim to drive transformative change. Our team of experts is dedicated to addressing complex challenges, from optimizing operational efficiencies to enhancing user experiences. Through our strategic focus on innovation, we seek to empower businesses and individuals alike, equipping them with the tools and knowledge needed to thrive in a competitive and dynamic world. By bridging the gap between emerging technologies and practical solutions, we aspire to make a meaningful impact and pave the way for future advancements.',
    logo: axiomlogo,
    id: 'axiom'
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
      id={experience.id}
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
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const images = [
      uablogo,
      anitslogo,
      tcslogo,
      axiomlogo
    ];

    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === images.length) {
        setLoading(false);
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Treat error as loaded to avoid hanging
    });

    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading && id) {
      const element = document.getElementById(id);
      if (element) {
        // Calculate the center position
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + window.scrollY;
        const elementHeight = elementRect.height;
        const viewportHeight = window.innerHeight;
        const scrollToPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2);

        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [loading, id]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <div className="education-experience-container" style={{ paddingTop: '6rem' }}>
          <NavBar />
          <p className="NavLogo">Venkata Sai Kuniganti</p>
          <div className="container">
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
      )}
    </>
  );
};

export default EducationExperience;