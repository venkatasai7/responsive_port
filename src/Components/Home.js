import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Logo from './Logo';
import Description from './Description';
import Timeline from './Timeline';
import Projects from './Projects';
import WordCloud from './WordCloud';
import Experience from './Experience';
import Footer from './Footer';
import Text from './Text';
import Spinner from './Spinner'; // Import Spinner component
import Certifications from './Certifications';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading
  const location = useLocation();

  useEffect(() => {
    // Simulate a page load delay, adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (location.state && location.state.target) {
        scroller.scrollTo(location.state.target, {
          duration: 500,
          smooth: true,
          offset: -window.innerHeight / 2 + 50,
        });
      }
    }, 1000); // Set to 0 or a value appropriate for your loading time

    return () => clearTimeout(timer);
  }, [location.state]);

  return (
<div style={{ 
  backgroundColor:"#E2E6E7"
}}>      {isLoading && <Spinner />} {/* Show spinner while loading */}
      {!isLoading && (
        <>
          <Logo />
          <div id="about">
            <Description /> {/* About */}
          </div>
          
          <div id="experiences">
            {/* <Text 
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
            /> */}
            <Timeline /> {/* Experiences */}
          </div>

          <div id="projects">
            {/* <Text 
              text='To test and apply my skills in the real world, I’ve worked on several projects.'
            /> */}
            <Projects /> {/* Projects */}
          </div>

          <div id="publications">
            {/* <Text 
              text='Published 2 '
            /> */}
            <Experience /> {/* Publications */}
          </div>

          <div id="skills">
            <Text 
              // text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
            />
            <div className="container">
            <WordCloud />
            </div>
             {/* Skills */}
          </div>

          <div className="container">
            <Certifications/>
            <div className="container"><br /></div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
