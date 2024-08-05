import React from 'react';
import NavBar from './NavBar';
import '../Styles/Contact.css';
import linkedn_in from '../images/organizations/LinkedIn_logo.png';
import Github from '../images/organizations/Github.webp';
import Leetcode from '../images/organizations/Leetcode.png';

import '@fortawesome/fontawesome-free/css/all.min.css';




const cardData = [
    {
        id: 1,
        title: "LinkedIn",
        image: linkedn_in,
        redirectlink: "https://www.linkedin.com/in/venkatasai-kuniganti/"
    },
    {
        id: 2,
        title: "Leetcode",
        image: Leetcode,
        redirectlink: "https://leetcode.com/u/venkatasai7677/"
    },
    {
        id: 3,
        title: "Github",
        image: Github,
        redirectlink: "https://github.com/venkatasai7"
    },
    {
        id: 4,
        title: "Card 4",
        image: linkedn_in,
        redirectlink: "This is the fourth card."
    },
    {
        id: 5,
        title: "Card 5",
        image: linkedn_in,
        redirectlink: "This is the fifth card."
    },
    {
        id: 6,
        title: "Card 6",
        image: linkedn_in,
        redirectlink: "This is the sixth card."
    },
    {
        id: 7,
        title: "Card 7",
        image: linkedn_in,
        redirectlink: "This is the seventh card."
    },
    {
        id: 8,
        title: "Card 8",
        image: linkedn_in,
        redirectlink: "This is the eighth card."
    }
];

const Contact = () => {
    return (
        <div>
            <NavBar />
            <p className="NavLogo">Venkata Sai Kuniganti</p>
            <br /><br /><br /><br />
            <div className="container">
                <h1>Contact & Social Media</h1>
            </div>

            <div className="mailcontainer">
  <div className="mailcard email-card">
    <h5 className="mailcard-header">
      <i className="fas fa-envelope"></i> Email
    </h5>
    <div className="mailcard-body">
      <p className="mailcard-text">vkuniganti@gmail.com</p>
    </div>
  </div>
</div>


            <div className="container">
                <div className="card-container">
                    {cardData.map(card => (
                        <div key={card.id} className="card">
                            <img src={card.image} className="card-img-top" alt={card.title} />
                            <div className="card-body">
                                <p className="card-title">{card.title}</p>
                                <a href={card.redirectlink} className="btn btn-primary"
                                    target="_blank" rel="noopener noreferrer"
                                >view</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;