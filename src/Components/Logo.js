import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import "../Styles/Logo.css";

const Logo = () => {
  const [showAlternateText, setShowAlternateText] = useState(false);

  useEffect(() => {
    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: ".descriptioncontent",
        start: "top bottom",
        end: "top center",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > 0.9) {
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
  }, []);

  return (
    <div>
      <NavBar flag={showAlternateText}/>
      <div className="logo-logocontainer">
        <p className="logo">
          {showAlternateText ? (
            <>
             Venkata Sai Kuniganti
            </>
          ) : (
            <>
              Hola ! I am Venkata Sai Kuniganti .
            </>
          )}
        </p>
      </div>
      <div className="logocontainer"></div>
    </div>
  );
};

export default Logo;
