import React from 'react';
import '../Styles/Experience.css';
import ijrar from '../images/organizations/IJRAR.png';
import jetir from '../images/organizations/JETIR.png';
import { useNavigate } from 'react-router-dom';

const Experience = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/paper-publications');
  };
  
  return (
    <>
      <div className="experience-container">

      <div className="container my-3 d-flex justify-content-between align-items-center">
  <h1>Paper Publications</h1>
  <button className="btn btn-dark" onClick={handleViewDetails}>
    View in Detail
  </button>
</div>


        <div className="experience-content">
          <div className="maincontainer">
            <div className="thecard">
              <div className="thefront" style={{ backgroundImage: `url(${jetir})` }}>
              </div>
              <div className="theback">
                <h1>Leaf Fungicide Recommendation using EfficientNetV2B0</h1>
                <p>
                This paper discusses using EfficientNetV2B0 to identify and diagnose plant diseases, specifically targeting apples, potatoes, and tomatoes. It proposes a GUI-based application that aids in disease detection, appropriate fungicide use, and reduces crop loss and soil pollution                </p>
                {/* <a href="https://www.jetir.org/papers/JETIR2211370.pdf" className="btn btn-primary mx-1 my-1" target="_blank" rel="noopener noreferrer">View Paper</a> */}
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
                This paper introduces a predator warning system using Yolo V5, which alerts farmers to the presence of predators on their farm. The application, featuring a user-friendly interface, is a cost-effective and efficient alternative to manual guarding and electric fences, and can be extended to protect various farm animals.                </p>
                {/* <a href="https://www.ijrar.org/papers/IJRAR22C1807.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Paper</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
