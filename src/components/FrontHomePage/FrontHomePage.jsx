/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [caseStudyData, setCaseStudyData] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setCaseStudyData(res.data);
    });
  }, []);

  return (
    <FrontHomepageContainer>
      <div>
        <Header>Project Case Study</Header>
        {caseStudyData.map((project, index) => (
          <CardBody key={index}>
            <DetailButton>
              <Link
                className='detailButtonLink'
                to={`/frontDetails/${project._id}`}
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
    </FrontHomepageContainer>
  );
};

export default FrontHomePage;
