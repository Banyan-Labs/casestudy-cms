import React from 'react';
import indeedHomepage from '../../Image/indeedHomepage.jpg'
import manifoldHomepage from '../../Image/manifoldHomepage.jpg'
import ttvHomepage from '../../Image/ttvHomepage.jpg'
import './style.css';
import { useState } from 'react';

const ProjectCard = ({ data }) => {
  const [modalType, setModalType] = useState(0)
  return (

    <div className="container">

      <button className="signUpBtn" onClick={() => setModalType(1)} style={{ backgroundColor: "#9fb5d5" }}>Sign Up</button>
      <button className="signInBtn" onClick={() => setModalType(2)} style={{ backgroundColor: "#9fb5d5" }}>Sign In</button>
      
      <div className='header'>Project Case Study
        {data.map((project) => (

          <div className='cardBody'>

            <div className='cardInfo'>
              <div className='cardName'>{project.name}</div>
              <div className='cardDescription'>{project.description}</div>
            </div>

            <div className='cardLogo'>
              <img src={manifoldHomepage} style={{ width: "400px", padding: "10%" }} alt='Company Homepage' className='cardImg' />
              {/* <img src={project.image} style={{ width: "400px", padding: "10%" }} alt='Company Homepage' className='cardImg' /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;