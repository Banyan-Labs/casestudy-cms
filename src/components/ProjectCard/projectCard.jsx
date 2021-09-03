import React, { useState } from 'react';
import './style.css';

const ProjectCard = ({ data, buttonsToRender }) => {
  const [modalType, setModalType, createNew] = useState(0);
  return (
    <div className='container'>
      {buttonsToRender === 'frontend' ? (
        <div>
          <button
            className='signUpBtn'
            onClick={() => setModalType(1)}
            style={{ backgroundColor: '#9fb5d5' }}
          >
            Sign Up
          </button>
          <button
            className='signInBtn'
            onClick={() => setModalType(2)}
            style={{ backgroundColor: '#9fb5d5' }}
          >
            Sign In
          </button>
        </div>
      ) : (
        <button className='createNew' onClick={createNew}>
          Create New Project
        </button>
      )}

      <div className='header'>
        Project Case Study
        {data.map((project) => (
          <div className='cardBody' key={project.name}>
            <div className='cardInfo'>
              <div className='cardName'>{project.name}</div>
              <div className='cardDescription'>{project.description}</div>
            </div>

            <div className='cardLogo'>
              <img
                src={project.image}
                style={{ width: '400px', padding: '10%' }}
                alt='Company Homepage'
                className='cardImg'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
