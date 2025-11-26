// import React from 'react';
// import spinner from '../images/pacman.gif'; // Make sure the path is correct
// import '../Styles/Spinner.css'; // Add styles for the spinner

// const Spinner = () => (
//   <div className="spinner-overlay">
//     <img src={spinner} alt="Loading..." className="spinner-image" />
//   </div>
// );

// export default Spinner;


import React from 'react';
import '../Styles/Spinner.css'; 

const Spinner = () => (
  <div className="spinner-overlay">
    <div className="hole">
      {Array.from({ length: 10 }).map((_, index) => (
        <i key={index}></i>
      ))}
    </div>
  </div>
);

export default Spinner;
