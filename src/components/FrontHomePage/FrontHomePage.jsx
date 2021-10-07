import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  SearchBar,
} from './style';

const FrontHomePage = () => {
  const url = 'http://localhost:8080/cases/';
  const [caseStudyData, setCaseStudyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setCaseStudyData(res.data);
    });
  }, []);

  return (
    <FrontHomepageContainer>
      <div>
        <SearchBar>
          <input
            type='text'
            placeholder={'Search...'}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </SearchBar>
        <Header>Project Case Studies</Header>
        {caseStudyData
          .filter((val) => {
            if (searchTerm == '') {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((project, index) => (
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
