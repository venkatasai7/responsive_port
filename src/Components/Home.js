import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Description from './Description';
import Timeline from './Timeline';
import Projects from './Projects';
import WordCloud from './WordCloud';
import Experience from './Experience';
import Footer from './Footer';
import Text from './Text';
import Spinner from './Spinner'; // Import Spinner component

const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate a page load delay, adjust as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set to 0 or a value appropriate for your loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#dfdfdf' }}>
      {isLoading && <Spinner />} {/* Show spinner while loading */}
      {!isLoading && (
        <>
          <Logo />
          <div id="about">
            <Description /> {/* About */}
          </div>
          
          <div id="experiences">
            <Text 
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
            />
            <Timeline /> {/* Experiences */}
          </div>

          <div id="projects">
            <Text 
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
            />
            <Projects /> {/* Projects */}
          </div>

          <div id="publications">
            <Text 
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
            />
            <Experience /> {/* Publications */}
          </div>

          <div id="skills">
            <Text 
              text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
            />
            <WordCloud /> {/* Skills */}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
