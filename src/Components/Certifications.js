import '../Styles/Certificates.css'

import React from 'react';
import { useNavigate } from 'react-router-dom';
import cimg1 from '../images/organizations/aws.webp';
import cimg2 from '../images/organizations/hackerrank2.webp';
import cimg3 from '../images/organizations/Infosys.png';


const Certifications = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/`);
  };

  return (
    <>
      <h1 style={{ textAlign: 'left', margin: '20px' }}>Certifications/Achievements</h1>

      {/* Card 1 */}
      <a href="https://www.credly.com/badges/7f612e6c-d356-4f50-bf27-749148e50850/public_url" target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>
        <div className="certcard">
          <img src={cimg1} alt="AWS logo" style={logoStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Machine Learning</p>
            <p style={descriptionStyle}>Machine Learning Foundations</p>
          </div>
        </div>
      </a>

      {/* Card 2 */}
      <a href="https://www.credly.com/badges/7f612e6c-d356-4f50-bf27-749148e50850/public_url" target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>
        <div className="certcard">
          <img src={cimg2} alt="HackerRank logo" style={logoStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Intro to Python</p>
            <p style={descriptionStyle}>Yassin Marco</p>
          </div>
        </div>
      </a>

      {/* Card 3 */}
      <a href="https://www.credly.com/badges/7f612e6c-d356-4f50-bf27-749148e50850/public_url" target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>
        <div className="certcard">
          <img src={cimg3} alt="Infosys logo" style={logoStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>An Introduction to Programming the Internet of Things (IOT)</p>
            <p style={descriptionStyle}>Ian Harris</p>
          </div>
        </div>
      </a>

      <button className="btn btn-dark" onClick={() => handleViewDetails()}>
        View in Detail
      </button>
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


