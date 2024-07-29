import React from 'react';
import '../Styles/Experience.css';
import ijrar from '../images/organizations/IJRAR.png';
import jetir from '../images/organizations/JETIR.png';

const Experience = () => {
  return (
    <>
      <div className="container my-3">
        <button className="btn btn-dark" href="/">
          View in Detail
        </button>
      </div>
      <div className="experience-container">
        <h3 className="experience-title">Experiences</h3>
        <div className="experience-content">
          <div className="maincontainer">
            <div className="thecard">
              <div className="thefront" style={{ backgroundImage: `url(${jetir})` }}>
              </div>
              <div className="theback">
                <h1>Leaf Fungicide Recommendation using EfficientNetV2B0</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis aspernatur eius beatae, tempora totam velit non nulla quis officiis culpa aliquam laudantium commodi reprehenderit nihil illum laboriosam impedit! Praesentium.
                </p>
                <button className='btn btn-primary'>Details</button>
              </div>
            </div>
          </div>

          <div className="maincontainer">
            <div className="thecard">
              <div className="thefront" style={{ backgroundImage: `url(${ijrar})` }}>
              </div>
              <div className="theback">
                <h1>Predator Warning System using Yolo-V5 </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis aspernatur eius beatae, tempora totam velit non nulla quis officiis culpa aliquam laudantium commodi reprehenderit nihil illum laboriosam impedit! Praesentium.
                </p>
                <button className='btn btn-primary'>Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
