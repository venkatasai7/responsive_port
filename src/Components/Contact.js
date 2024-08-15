import React from 'react';
import NavBar from './NavBar';
import '../Styles/Contact.css';
import linkedn_in from '../images/organizations/LinkedIn_logo.png';
import Github from '../images/organizations/Github.webp';
import Leetcode from '../images/organizations/Leetcode.png';
import gfg from '../images/organizations/gfg.png';
import HackeRank from '../images/organizations/HackerRank.png';
import hackerearth from '../images/organizations/hackerearth.webp'
import credly from '../images/organizations/credly.png'


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
        title: "GeeksForGeeks",
        image: gfg,
        redirectlink: "https://www.geeksforgeeks.org/user/venkatasai25/"
    },
    {
        id: 5,
        title: "HackerRank",
        image: HackeRank,
        redirectlink: "https://www.hackerrank.com/profile/IT_318126511134"
    },
    {
        id: 6,
        title: "HackerEarth",
        image: hackerearth,
        redirectlink: "https://www.hackerearth.com/@venkatsai.7"
    },
    {
        id: 7,
        title: "Credly",
        image: credly,
        redirectlink: "https://www.credly.com/users/venkata-sai-kuniganiti"
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


            <div className="contactcontainer">
                <div className="contactcard-contactcontainer">
                    {cardData.map(card => (
                        <div key={card.id} className="contactcard">
                            <img src={card.image} className="contactcard-img-top" alt={card.title} />
                            <div className="contactcard-body">
                                <p className="contactcard-title">{card.title}</p>
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