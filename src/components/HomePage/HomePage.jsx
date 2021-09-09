/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  HomepageContainer,
  Header,
  CardBody,
  CardInfo,
  CardName,
  CardDescription,
  CardLogo,
  CardImage,
} from './style';

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

      <div>
        <Header>Project Case Study</Header>
        {data.map((project) => (
          <CardBody key={project.name}>
            <CardInfo>
              <CardName>{project.name}</CardName>
              <CardDescription>{project.description}</CardDescription>
            </CardInfo>

            <CardLogo>
              <CardImage>
                <img src={project.image} alt='Company Homepage' />
              </CardImage>
            </CardLogo>
          </CardBody>
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
