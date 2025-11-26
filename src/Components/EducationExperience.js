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
import mindsparklogo from '../images/organizations/MindSpark-Logo.png';


const educationExperiences = [
  {
    title: 'Master of Science in Computer Science',
    institution: 'University of Alabama at Birmingham',
    date: '2023 - 2025',
    location: 'Birmingham, USA',
    description: 'As an international student from India, pursuing my Master’s in Computer Science at the University of Alabama at Birmingham has not only enriched my technical expertise but also allowed me to build valuable connections. Through coursework in advanced algorithms, database development, and machine learning in my first semester, followed by systems programming, deep learning, and cyber risk management in the second, I gained hands-on experience and collaborated with peers and professionals. Now, in my third semester, I’m focused on cloud and computer security, along with data science, all while continuing to expand my professional network.',
    logo: uablogo,
    id: 'uabms'
  },
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Anil Neerukonda Institute of Technology and Sciences',
    date: '2018 - 2022',
    location: 'Visakhapatnam, IND',
    description: 'I developed a strong foundation across various key areas. My coursework included in-depth studies in programming languages like C, C++, Python, and Java, alongside essential subjects like Database Management Systems (DBMS), computer organization, and architecture. I also explored more advanced topics such as Formal Languages and Automata Theory, compiler design, and machine learning, where my final year project focused on developing a leaf fungicide recommendation system using EfficientNet V2 B0. This diverse academic background has equipped me with a comprehensive understanding of computer science, laying the groundwork for my current master s studies and future career in the tech industry.',
    logo: anitslogo,
    id: 'anitsug'
  }
];

const workExperiences = [
  {
    title: 'Software Engineer',
    institution: 'MindSpark',
    date: 'Jun 2025- Present',
    location: 'Birmingham, USA',
    description: 'At MindSpark, I engineered and scaled an AI-powered student assistant platform, integrating ReactJS, Python, the OpenAI API, and AWS to support over 1,000 students. I built asynchronous batch-processing pipelines using the OpenAI Batch API and WebHooks, reducing costs by 50% and boosting efficiency by 80%. I led the design of a dynamic AWS AppConfig-based configuration management system for LLM workflows and created custom Lambda layers for automated, consistent configuration loading. Additionally, I developed a fault-tolerant backend using Lambda ,RDS and integrated React with Google Apps Script to deliver modular, maintainable front-end features.',
    logo: mindsparklogo,
    id: 'mndsprk'
  },
  {
    title: 'Teaching Assistant for Database Development',
    institution: 'University of Alabama at Birmingham',
    date: 'Fall 2024',
    location: 'Birmingham, USA',
    description: 'worked as a Teaching assistant for Under Grad/ Grad students under professor Zhang Chengcui in fall 2024 for Database Application Develeopment,',
    logo: uablogo,
    id: 'uabdb'
  },
  {
    title: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    date: '2022 - 2023',
    location: 'Hyderabad, IND',
    description: 'delivering multi-level secure reports for more than 1,000 users. I designed procedures, triggers, and views to enhance data retrieval, integrity, and reporting efficiency. Through thorough unit, integration, and system testing, I identified and resolved workflow issues, improving system stability and reducing production errors by 40%. I improved database performance through query optimization, indexing, and automated workflows, supporting multiple state government accounts. I also collaborated in an Agile/Scrum environment and used GitHub for version control to deliver database development milestones on time. Additionally, I built and maintained ETL pipelines to support reliable data processing.',
    logo: tcslogo,
    id: 'tcs'
  },
  {
    title: 'Software Developer Engineer Intern',
    company: 'Axiom io',
    date: '2021 - 2022',
    location: 'Secundrabad, IND',
    description:'I have worked on diverse projects involving full-stack development, data engineering, and cloud computing. Using Python with BeautifulSoup and Selenium, I performed large-scale web scraping to extract structured data from unstructured sources. I built secure APIs and user interfaces with Flask and Swagger UI, integrating OAuth and JWT for improved authentication. I also wrote Python scripts to convert data between XML and JSON formats, supporting internal services and automating reports. On the frontend, I developed responsive interfaces using React.js , ensuring a consistent user experience. Additionally, I completed intensive training in AWS,Python, and Java, applying these skills to hands-on projects focused on backend development and scalable system design.',  
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
            <h2 className="section-title"> - Work Experience - </h2>
            {workExperiences.map((work, index) => (
              <ExperienceCard key={index} experience={work} />
            ))}
          </div>
          <div className="container" style={{ paddingTop: '2rem' }}>
            <h2 className="section-title"> - Education - </h2>
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