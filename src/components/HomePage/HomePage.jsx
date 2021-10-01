/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccountModal from '../AccountModal/AccountModal';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import {
  HomepageContainer,
  Header,
  CardBody,
  CardInfo,
  CardName,
  CardDescription,
  CardImage,
  CreateNewButton,
  DetailButton,
} from './style';

const HomePage = ({ buttonsToRender }) => {
  const [modalType, setModalType] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const url = 'http://localhost:8080/cases/';

  const [caseStudyData, setCaseStudyData] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setCaseStudyData(res.data);
    });
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const { loginWithRedirect, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <HomepageContainer>
      {buttonsToRender === 'frontend' ? (
        <div>
          <button className='signUpBtn' onClick={() => loginWithRedirect()}>
            Sign Up
          </button>
          <button className='signInBtn' onClick={() => loginWithRedirect()}>
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
        {caseStudyData.map((project, index) => (
          <CardBody key={index}>
            <DetailButton>
              <Link className='detailButtonLink' to={`/details/${project._id}`}>
                Details
              </Link>
            </DetailButton>
            <CardInfo>
              <CardName>{project.name}</CardName>
              <CardDescription>{project.description}</CardDescription>
            </CardInfo>
              <CardImage>
                <img src={project.image} alt='Company Homepage' />
              </CardImage>
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
