import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Projects.css';

const Projects = () => {
  const cards = [
    {
      id: 1,
      imageUrl: "../images/01.jpg",
      title: 'Card 1',
      buttonText: 'View Details',
      buttonLink: '/'
    },
    {
      id: 2,
      imageUrl: "../images/03.jpg",
      title: 'Card 2',
      buttonText: 'View Details',
      buttonLink: '/'
    },
    {
      id: 3,
      imageUrl: "../images/04.jpg",
      title: 'Card 3',
      buttonText: 'View Details',
      buttonLink: '/'
    },
    {
      id: 4,
      imageUrl: '../images/05.jpg',
      title: 'Card 4',
      buttonText: 'View Details',
      buttonLink: '/'
    },
    {
      id: 5,
      imageUrl: '../images/06.jpg',
      title: 'Card 5',
      buttonText: 'View Details',
      buttonLink: '/'
    },
    {
      id: 6,
      imageUrl: '../images/10.jpg',
      title: 'Card 6',
      buttonText: 'View Details',
      buttonLink: '/'
    }
  ];

  return (
    <div className="my-3">
    <div className="container my-3">
    <button className="btn btn-dark" href="/">
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
              <a href={card.buttonLink} className="btn btn-primary">{card.buttonText}</a>
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
