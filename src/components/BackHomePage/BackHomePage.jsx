/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
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
  LogIn,
} from './style';

const BackHomePage = () => {
  const url = 'http://localhost:8080/cases/';
  const [caseStudyData, setCaseStudyData] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setCaseStudyData(res.data);
    });
  }, []);

  const { logout, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <BackHomepageContainer>
      <div>
        <LogIn>
          <Link id={'link'} to={'/'} onClick={() => logout()}>
            Log Out
          </Link>
        </LogIn>
      </div>
      <CreateNewButton>
        <Link to={'/input-page'} id={'link'}>
          Create New
        </Link>
      </CreateNewButton>
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

export default BackHomePage;
