import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.href = '/';
  };
  return (
    <footer className="foot">
      <h6 className='footertext'>Developed and Designed by </h6>
      <div className="tooltip-container">
      <button className="at-button" onClick={handleClick}>
        🙋🏻‍♂️
      </button>
      <span className="tooltip-text">Click here</span>
    </div>

    </footer>
  );
};

export default Footer;

