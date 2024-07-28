import Skills from './Skills'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import '../Styles/WordCloud.css';




const WordCloud = () => {
  const cloudRef = useRef(null);

  useEffect(() => {
    const element = cloudRef.current;
    const logos = element.querySelectorAll('.techlogo');

    gsap.fromTo(logos,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 2, duration:5, stagger: 1, ease: 'elastic.out(1.5,0.5)' }
    );
  }, []);

  return (
<>
<div className="container">
<button className='btn btn-primary bigbutton '  href="/">View All Skills</button>
</div>
    <div className="word-cloud" ref={cloudRef}>
      {Skills.map((tech, index) => (
        <div
          key={index}
          className="techlogo"
          title={tech.name}
          style={{ backgroundImage: `url(${tech.logo})` }}
        />
      ))}
    </div>
    </>
  );
};

export default WordCloud;