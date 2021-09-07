/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HomepageContainer } from './style';

const HomePage = ({ data, buttonsToRender }) => {
  const [modalType, setModalType] = useState(0);
  return (
    <HomepageContainer>
      {buttonsToRender === 'frontend' ? (
        <div>
          <button className='signUpBtn' onClick={() => setModalType(1)}>
            Sign Up
          </button>
          <button className='signInBtn' onClick={() => setModalType(2)}>
            Sign In
          </button>
        </div>
      ) : (
        <button className='createNew'>Create New Project</button>
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
                alt='Company Homepage'
                className='cardImg'
              />
            </div>
          </div>
        ))}
      </div>
    </HomepageContainer>
  );
};

HomePage.propTypes = {
  data: PropTypes.array,
  buttonsToRender: PropTypes.string,
};

export default HomePage;
