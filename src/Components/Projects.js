import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Projects.css';
import { useNavigate } from 'react-router-dom';

const cards = [
  {
    id: 'project1',
    imageUrl: "../images/01.jpg",
    title: 'ML/DL projects',
    buttonText: 'View Details',
    buttonLink: '/projects/project1'
  },
  {
    id: 'project2',
    imageUrl: "../images/03.jpg",
    title: 'React Projects',
    buttonText: 'View Details',
    buttonLink: '/projects/project2'
  },
  {
    id: 'project3',
    imageUrl: "../images/04.jpg",
    title: 'Python Projects',
    buttonText: 'View Details',
    buttonLink: '/projects/project3'
  }
  // Add more cards as needed
];

const Projects = () => {
  const navigate = useNavigate();

  const handleViewDetails = (link) => {
    navigate(link);
  };

  return (
    <div className="my-3">
      <div className="container my-3">
        <button className="btn btn-dark" onClick={() => navigate('/projects')}>
          View All Projects
        </button>
      </div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {cards.map((card, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={card.id}>
              <img src={card.imageUrl} className="d-block w-100" alt={card.title} />
              <div className="carousel-caption d-block">
                <h5>{card.title}</h5>
                <button className="btn btn-primary" onClick={() => handleViewDetails(card.buttonLink)}>
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Projects;
