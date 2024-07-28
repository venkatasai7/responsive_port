import React, { useEffect } from 'react';
import '../Styles/Projects.css';

const Projects = ({ direction = 'right', speed = 'fast' }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const cards = [
    {
      id: 1,
      imageUrl: "../images/01.jpg",
      title: 'Card 1',
      buttonText: 'Go somewhere',
      buttonLink: '/'
    },
    {
      id: 2,
      imageUrl: "../images/03.jpg",
      title: 'Card 2',
      buttonText: 'Go somewhere',
      buttonLink: '/'
    },
    {
      id: 3,
      imageUrl: "../images/04.jpg",
      title: 'Card 3',
      buttonText: 'Go somewhere',
      buttonLink: '/'
    },
    {
      id: 4,
      imageUrl: '../images/05.jpg',
      title: 'Card 4',
      buttonText: 'Go somewhere',
      buttonLink: '/'
    },
    {
      id: 5,
      imageUrl: '../images/06.jpg',
      title: 'Card 5',
      buttonText: 'Go somewhere',
      buttonLink: '/'
    },
    {
      id: 6,
      imageUrl: '../images/10.jpg',
      title: 'Card 6',
      buttonText: 'Go somewhere',
      buttonLink: '/'
    }
  ];

  return (
    <>
      <div className='aboutcontent'>
        <div className="container">
          <button className='btn btn-primary bigbutton' href="/">View All Projects</button>
        </div>
        <div className="scroller" data-direction={direction} data-speed={speed}>
          <div className="scroller__inner">
            {cards.map((card) => (
              <div key={card.id} className="card">
                <div className="card-img-container">
                  <img src={card.imageUrl} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <a href={card.buttonLink} className="btn btn-primary">{card.buttonText}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
