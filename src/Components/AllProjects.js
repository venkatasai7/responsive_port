import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/AllProjects.css';
import projects from './projectList';
import Skills from './Skills';

const getTechLogo = (techName) => {
  const skill = Skills.find(skill => skill.name.toLowerCase() === techName.toLowerCase());
  return skill ? skill.logo : null;
};

const Card = ({ title, description, link, technologies, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(cardRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <a
      href={link}
      className={`d-flex align-items-center border p-3 mb-3 custom-card ${isVisible ? 'slide-in' : ''}`}
      id={id}
      ref={cardRef}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="d-flex flex-column flex-grow-1">
        <h5 className="mb-2">{title}</h5>
        <p className="mb-2">{description}</p>
      </div>
      <div className="d-flex flex-wrap align-items-center ml-3">
        {technologies.map((tech) => {
          const logo = getTechLogo(tech);
          return logo ? (
            <img key={tech} src={logo} alt={tech} className="tech-logo" />
          ) : null;
        })}
      </div>
    </a>
  );
};

const AllProjects = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
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
  }, [id]);

  const categories = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <div style={{ backgroundColor:'whitesmoke' }}>
      <NavBar />
      <p className="NavLogo">Venkata Sai Kuniganti</p>
      <br /><br /><br /><br />
      <h1 className="text-center">Project </h1>
      <div className="container mt-5">
        {Object.keys(categories).map((category) => (
          <div key={category} className="category-section">
            <h2 className="category-heading">{category}</h2>
            {categories[category].map((project) => (
              <Card
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
