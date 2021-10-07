import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import FrontHomePage from './../FrontHomePage/FrontHomePage';

import {
  CardBody,
  CardInfo,
  CardName,
  CardDescription,
  CardImage,
  DetailButton,
} from './style';

const ProjectList = ({ caseStudyData, searchQuery }) => (
    <div>
    {caseStudyData.filter((data) =>
      new RegExp(`^${searchQuery}`, 'i')
        .test(data.caseStudy[0].projectTitle)
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
        ))
    )}
  </div>
);

ProjectList.propTypes = {
  caseStudyData: PropTypes.string,
  searchQuery: PropTypes.string,
};

export default ProjectList;




