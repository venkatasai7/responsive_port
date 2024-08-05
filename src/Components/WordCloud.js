import Skills from './Skills';
import React, { useEffect, useRef } from 'react';
import '../Styles/WordCloud.css';

const WordCloud = () => {
  const cloudRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const logos = cloudRef.current.querySelectorAll('.techlogo');
    logos.forEach((logo) => {
      observer.observe(logo);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="container my-3">
        {/* <button className="btn btn-dark" href="/">
          View All Skills
        </button> */}
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
