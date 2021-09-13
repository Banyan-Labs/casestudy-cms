import React, { useState } from 'react';
import AccountModal from '../AccountModal/AccountModal';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  HomepageContainer,
  Header,
  CardBody,
  CardInfo,
  CardName,
  CardDescription,
  CardLogo,
  CardImage,
  CreateNewButton,
} from './style';

const HomePage = ({ data, buttonsToRender }) => {
  const [modalType, setModalType] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };
  return (
    <HomepageContainer>
      {buttonsToRender === 'frontend' ? (
        <div>
          <button className='signUpBtn' onClick={() => openModal(0)}>
            Sign Up
          </button>
          <button className='signInBtn' onClick={() => openModal(1)}>
            Sign In
          </button>
          {modalOpen && (
            <AccountModal modalType={modalType} setModalType={setModalType} />
          )}
        </div>
      ) : (
        <CreateNewButton>
          <Link to={'/input-page'} id={'link'}>
            Create New Project
          </Link>
        </CreateNewButton>
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
