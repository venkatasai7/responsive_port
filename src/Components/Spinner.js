// Spinner.js
import React from 'react';
import spinner from '../images/pacman.gif'; // Make sure the path is correct
import '../Styles/Spinner.css'; // Add styles for the spinner

const Spinner = () => (
  <div className="spinner-overlay">
    <img src={spinner} alt="Loading..." className="spinner-image" />
  </div>
);

export default Spinner;
