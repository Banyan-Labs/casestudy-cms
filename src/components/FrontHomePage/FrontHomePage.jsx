/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import {
  FrontHomepageContainer,
  Header,
  CardBody,
  CardInfo,
  CardName,
  CardDescription,
  CardImage,
  DetailButton,
} from './style';

const FrontHomePage = () => {
  const url = 'http://localhost:8080/cases/';

  const [caseStudyData, setCaseStudyData] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setCaseStudyData(res.data);
    });
  }, []);

  // const backHomePagePath = () => {
  //   history.push('/backHomePage')
  // }





  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <FrontHomepageContainer>
      <div>
        <button className='signUpBtn' onClick={(test) => test + 1}>
          Sign Up
        </button>
        <button className='signInBtn' onClick={() => loginWithRedirect()}>
          Sign In
        </button>
      </div>
      <div>
        <Header>Project Case Study</Header>
        {caseStudyData.map((project, index) => (
          <CardBody key={index}>
            <DetailButton>
              <Link className='detailButtonLink' to={`/frontDetails/${project._id}`}>
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
    </FrontHomepageContainer>
  );
};

FrontHomePage.propTypes = {
  data: PropTypes.array,
  buttonsToRender: PropTypes.string,
};

export default FrontHomePage;

// if logged in --- front end
// if not ---- back end
// how to determine if someone is authenticated with auth0
// how to verify authentification with auth0
