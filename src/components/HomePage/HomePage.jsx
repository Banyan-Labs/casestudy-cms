/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AccountModal from '../AccountModal/AccountModal';
import './style.css';

const HomePage = ({ data }) => {
  const [modalType, setModalType] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };
  return (
    <div className='container'>
      <button
        className='signUpBtn'
        onClick={() => openModal(0)}
        style={{ backgroundColor: '#9fb5d5' }}
      >
        Sign Up
      </button>
      <button
        className='signInBtn'
        onClick={() => openModal(1)}
        style={{ backgroundColor: '#9fb5d5' }}
      >
        Sign In
      </button>
      {modalOpen && (
        <AccountModal modalType={modalType} setModalType={setModalType} />
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

export default HomePage;
