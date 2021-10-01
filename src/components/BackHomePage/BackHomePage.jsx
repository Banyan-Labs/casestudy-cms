/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import {
  BackHomepageContainer,
  Header,
  CardBody,
  CardInfo,
  CardName,
  CardDescription,
  CardImage,
  CreateNewButton,
  DetailButton,
} from './style';

const BackHomePage = () => {
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
    <BackHomepageContainer>
      <div>
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
              <Link
                className='detailButtonLink'
                to={`/backDetails/${project._id}`}
              >
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
    </BackHomepageContainer>
  );
};

BackHomePage.propTypes = {
  data: PropTypes.array,
  buttonsToRender: PropTypes.string,
};

export default BackHomePage;

// if logged in --- front end
// if not ---- back end
// how to determine if someone is authenticated with auth0
// how to verify authentification with auth0
