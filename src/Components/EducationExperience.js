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
    title: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    date: '2022 - 2023',
    location: 'Hyderabad, IND',
    description: 'Developed PL/SQL scripts to facilitate application development, utilizing expertise in both Oracle SQL and SQL Server, and collaborated with Spring Boot to design the frontend, ensuring smooth data delivery and integration. Managed accounts and taxes through the implementation of SQL queries, generating reports displayed on the frontend, and maintained data integrity across various user access levels. Worked independently within an agile model, focusing on bug fixes and optimizing applications for enhanced efficiency, demonstrating a proactive approach to problem-solving and code improvement. Underwent training in Azure Data Factory, Python, and SQL, applying acquired knowledge to utilize Python scripts for data handling and ETL processes, showcasing a commitment to continuous self-learning and adaptability to emerging technologies.    ',
    logo: tcslogo,
    id: 'tcs'
  },
  {
    title: 'Software Developer Engineer',
    company: 'Axiom io',
    date: '2021 - 2022',
    location: 'Secundrabad, IND',
    description:'During an internship focused on Flask development, I gained hands-on experience in various cutting-edge technologies, including AWS, JavaScript, Angular, Flask, APIs, Python, and .NET MVC structure, as part of a comprehensive training program designed to keep pace with trending technologies. Throughout the internship, I developed fundamental skills through practical application and worked closely with experienced team members to gain a deep understanding of job responsibilities. I had the opportunity to shadow senior developers during the migration of Duckcreek client applications to the cloud, gaining valuable insights into cloud migration processes. In addition to these experiences, I utilized Highcharts.js to generate reports and actively collaborated with peers on a project after the initial learning phase, which highlighted my ability to work effectively within a team. My training also included modules in HTML, CSS, Bootstrap, and Cybersecurity, further broadening my technical skill set and preparing me for future challenges in the tech industry.', 
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