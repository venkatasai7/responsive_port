import React from 'react'
import '../Styles/Experience.css'
import axiomimage from '../images/organizations/axiom.jpg'
import tcsimage from '../images/organizations/tcsjpg.jpg'

const Experience = () => {
    return (
    
    <div className="container">
    <div className='aboutcontent'>
    <h3 style={{ float: 'right' }} >Experiences</h3>
       <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <div className="maincontainer">
          <div className="maincontainer">
        <div className="thecard">
        <div className="thefront" style={{ backgroundImage:`url(${tcsimage})`}}>
        <h5 style={{ opacity:'0.25', textAlign: 'right',padding:'1%'}}>~Sep 2021 - Apr 2022 </h5>
          </div>
          <div className="theback">
            <h1>AXIOM IO</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis aspernatur eius beatae, tempora totam velit non nulla quis officiis culpa aliquam laudantium commodi reprehenderit nihil illum laboriosam impedit! Praesentium.
            </p>
            <button className='btn btn-primary'>Details</button>
          </div>
        </div>
      </div> 
      </div>

       <div className="maincontainer">
        <div className="thecard">
        <div className="thefront" style={{ backgroundImage:`url(${axiomimage})`}}>
        <h5 style={{ opacity:'0.25', textAlign: 'right',padding:'1%'}}>~Sep 2021 - Apr 2022 </h5>
          </div>
          <div className="theback">
            <h1>AXIOM IO</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus veritatis aspernatur eius beatae, tempora totam velit non nulla quis officiis culpa aliquam laudantium commodi reprehenderit nihil illum laboriosam impedit! Praesentium.
            </p>
            <button className='btn btn-primary'>Details</button>
          </div>
        </div>
      </div> 

    </div>
    </div>
    </div>
  );
}

export default Experience
