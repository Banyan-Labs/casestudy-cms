import React from 'react';
// import indeedLogo from './Image/indeedHomepage.jpg';
import './style.css';

// var cardImg = {
//   width: "400px",
//   marginLeft: "20%"
// };

const ProjectCard = ({ data }) => {
  return (
    
    <div className='header'>Project Case Study
      {data.map((project) => (
        <div className='cardBody'>
    
            <div className='cardInfo'>
              <div className='cardName'>{project.name}</div>
                <div className='cardDescription'>{project.description}</div>
              
            </div>
            <div className='cardLogo'>
              <img  src={project.image} alt='Company Homepage' className='logo' />
            </div>
       
        </div>


      ))}

    </div>
  
  );
};

export default ProjectCard;