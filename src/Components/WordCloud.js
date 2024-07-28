import Skills from './Skills';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/WordCloud.css';

gsap.registerPlugin(ScrollTrigger);

const WordCloud = () => {
  const cloudRef = useRef(null);

  useEffect(() => {
    const element = cloudRef.current;
    const logos = element.querySelectorAll('.techlogo');

    gsap.fromTo(
      logos,
      { opacity: 0, scale: 0.5 },
      { 
        opacity: 1, 
        scale: 2, 
        duration: 2, // Animation duration
        stagger: 0.1, 
        ease: 'elastic.out(1.5, 0.5)',
        scrollTrigger: {
          trigger: element,
          start: 'top center+=100', // Adjust as needed
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <>
      <div className="container my-3">
        <button className="btn btn-primary bigbutton" href="/">
          View All Skills
        </button>
      </div>
      <div className="word-cloud" ref={cloudRef}>
        {Skills.map((tech, index) => (
          <div
            key={index}
            className="techlogo"
            title={tech.name}
            style={{ 
              backgroundImage: `url(${tech.logo})`,
              borderColor: tech.color
            }}
          />
        ))}
      </div>
    </>
  );
};

export default WordCloud;
