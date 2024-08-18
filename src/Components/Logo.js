import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import "../Styles/Logo.css";
import img from "../images/logo/vizag2.png";
import Spinner from './Spinner'; // Import Spinner component

const Logo = () => {
  const [showAlternateText, setShowAlternateText] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: ".descriptioncontent",
        start: "top bottom",
        end: "top center",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > 0.5) {
            setShowAlternateText(true);
          } else {
            setShowAlternateText(false);
          }
        },
      },
    });

    tl.fromTo(
      ".logo",
      {
        y: "45vh",
        scale: 2,
        yPercent: -5,
      },
      {
        y: 0,
        scale: 1,
        yPercent: -5,
      }
    );

    // Create a new Image object to preload the image
    const imgElement = new Image();
    imgElement.src = img;
    imgElement.onload = () => setIsLoading(false); // Set loading to false when image is loaded
  }, []);

  return (
    <div>
      <NavBar />
      {isLoading && <Spinner />} {/* Show spinner while loading */}
      <div className="logo-logocontainer">
        <p className="logo">
          {showAlternateText ? (
            <>Venkata Sai Kuniganti</>
          ) : (
            <>Hi ! I am Venkata Sai Kuniganti.</>
          )}
        </p>
      </div>
      <div
        className="logocontainer"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default Logo;
