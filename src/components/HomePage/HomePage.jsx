/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  CardLogo,
  CardImage,
  CreateNewButton,
  DetailButton,
} from './style';

const HomePage = () => {
  const url = 'http://localhost:8080/cases/';

  const [caseStudyData, setCaseStudyData] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setCaseStudyData(res.data);
    });
  }, []);

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <HomepageContainer>
      <div>
        <button className='signUpBtn' onClick={() => loginWithRedirect()}>
          Sign Up
        </button>
        <button className='signInBtn' onClick={() => loginWithRedirect()}>
          Sign In
        </button>
        <button className='logoutBtn' onClick={() => logout()}>
          Log Out
        </button>
      </div>
      <CreateNewButton>
        <Link to={'/input-page'} id={'link'}>
          Create New Project
        </Link>
      </CreateNewButton>
      )
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

// if logged in --- front end
// if not ---- back end
// how to determine if someone is authenticated with auth0
// how to verify authentification with auth0
