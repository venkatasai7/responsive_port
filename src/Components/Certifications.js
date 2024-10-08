import '../Styles/Certificates.css'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import cimg1 from '../images/organizations/aws.webp';
import cimg2 from '../images/organizations/hackerrank2.webp';
import cimg3 from '../images/organizations/Infosys.png';


const Certifications = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/certificates`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
  <h1>Certificates</h1>
  <button className="btn btn-dark" onClick={handleViewDetails}>
    View in Detail
  </button>
</div>

      {/* Card 1 */}
      <a href="https://www.credly.com/badges/7f612e6c-d356-4f50-bf27-749148e50850/public_url" target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>
        <div className="certcard">
          <img src={cimg1} alt="AWS logo" style={logoStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Cloud Practitioner</p>
            <p style={descriptionStyle}>Amazon Web Services (AWS) </p>
          </div>
        </div>
      </a>

      {/* Card 2 */}
      <a href="https://www.hackerrank.com/certificates/56968eb4365c" target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>
        <div className="certcard">
          <img src={cimg2} alt="HackerRank logo" style={logoStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Python</p>
            <p style={descriptionStyle}>Hackkerank</p>
          </div>
        </div>
      </a>

      {/* Card 3 */}
      <a href="https://drive.google.com/file/d/17tzrhWqVHVx5CN8sFUv07yHMmPqZJLLf/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>
        <div className="certcard">
          <img src={cimg3} alt="Infosys logo" style={logoStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Certified Software Programmer</p>
            <p style={descriptionStyle}>Infosys</p>
          </div>
        </div>
      </a>


    </>
  );
};

// Styles
const cardLinkStyle = {
  textDecoration: 'none',
};

const logoStyle = {
  width: '70px',
  height: 'auto',
  objectFit: 'contain',
  marginRight: '40px',
};

const textContainerStyle = {
  textAlign: 'left',
  maxWidth: 'calc(100% - 90px)',
};

const titleStyle = {
  fontSize: '1.2rem',
  margin: '0',
  fontWeight: 'bold',
};

const descriptionStyle = {
  fontSize: '1rem',
  margin: '5px 0 0 0',
  color: '#555',
};

export default Certifications;
