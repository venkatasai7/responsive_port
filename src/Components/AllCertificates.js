import React from 'react';
import NavBar from './NavBar';
import hackerrank_b from '../images/organizations/HackerRank.png'; // Sample image
import aws from '../images/organizations/aws.webp'; // Sample image
import udemy from '../images/organizations/udemy.jpg'; // Sample image
import hackerrank from '../images/organizations/HackerRank_white.png'; // Sample image
import cisco from '../images/organizations/cisco.png'; // Sample image
import coursera from '../images/organizations/Coursera.png'; // Sample image
import gfg from '../images/organizations/gfg.png'; // Sample image
import infosys from '../images/organizations/Infosys.png'; // Sample image
import credly from '../images/organizations/creadly.avif'; // Sample image

const AllCertificates = () => {
  // Sample data for different cards
  const cardData = [
    {
      title: 'Amazon Web Services',
      text: 'AWS Certified Cloud Practitioner',
      image: aws,
      link: 'https://www.credly.com/earner/earned/badge/7f612e6c-d356-4f50-bf27-749148e50850',
    },
    {
      title: 'Udemy',
      text: 'Microsoft Azure: From Zero to Hero - The Complete Guide ',
      image: udemy,
      link: 'https://www.udemy.com/certificate/UC-d1fa32ea-042e-4675-8593-8703fe268940/',
    },
    {
      title: 'Infosys',
      text: 'Infosys Certified Software Programmer.',
      image: infosys,
      link: 'https://drive.google.com/file/d/17tzrhWqVHVx5CN8sFUv07yHMmPqZJLLf/view',
    },
    {
      title: 'Hackkerrank',
      text: 'Problem Solving (Basic)',
      image: hackerrank,
      link: 'https://www.hackerrank.com/certificates/6ded8f6194f9',
    },
    {
      title: 'Cisco Networking Academy',
      text: 'Introduction to Cyber Security',
      image: cisco,
      link: 'https://www.credly.com/badges/bbb4e778-d7f4-411b-9e39-cd02eb5e55f2',
    },
    {
      title: 'Hackerrank',
      text: 'Python (Basic)',
      image: hackerrank_b,
      link: 'https://www.hackerrank.com/certificates/56968eb4365c',
    },
    {
      title: 'Coursera',
      text: 'Using Python to Interact with the Operating System',
      image: coursera,
      link: 'https://www.coursera.org/account/accomplishments/certificate/8UG7NS7EJGKV',
    },
    {
      title: 'Geeks for Geeks',
      text: 'Placement-100',
      image: gfg,
      link: 'https://media.geeksforgeeks.org/courses/certificates/e2b26db0900064c6562b11528390d6c8.pdf',
    },
    {
      title: 'Hackerrank',
      text: 'Java(Basic)',
      image: hackerrank,
      link: 'https://www.hackerrank.com/certificates/30634cd48d12',
    },
    {
      title: 'Coursera',
      text: 'Crash Course on Python',
      image: coursera,
      link: 'https://www.coursera.org/account/accomplishments/certificate/F77W95DYE3UA',
    },
    {
      title: 'AWS-Partner',
      text: 'Technical Accredited',
      image: aws,
      link: 'https://www.credly.com/earner/earned/badge/2f466915-a422-43c8-a3a5-662ba2f7352c',
    },
    {
      title: 'AWS-Partner',
      text: 'Technical Accredited',
      image: credly,
      link: 'https://www.credly.com/earner/earned/badge/2f466915-a422-43c8-a3a5-662ba2f7352c',
    },
  ];

  return (
    <div style={{ backgroundColor: 'whitesmoke' }}>
      <NavBar />
      <div className="container">
        <br /><br /><br /><br />
        <h1 style={styles.title}>Certifications</h1>
        <p className="NavLogo">Venkata Sai Kuniganti</p>
        <div style={styles.gridContainer}>
          {cardData.map((card, index) => (
            <div className="card" style={styles.card} key={index}>
              <img
                src={card.image}
                className="card-img-top"
                alt={`Card ${index + 1}`}
                style={styles.cardImage}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href={card.link} className="btn btn-primary">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  title: {
    textAlign: 'center',
    margin: '2rem 0 1rem 0',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    padding: '1rem',
  },
  card: {
    width: '100%',
  },
  cardImage: {
    objectFit: 'cover',
    height: '12rem',
    width: '100%',
  },
};

export default AllCertificates;
