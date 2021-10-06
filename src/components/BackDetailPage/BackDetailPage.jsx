/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import { ProjectContainer, Label, Header, Image, Text } from './style';

const BackDetailPage = () => {
  let { projectId } = useParams();
  let history = useHistory();
  const url = 'http://localhost:8080/cases/';

  const [caseStudyData, setCaseStudyData] = useState([]);
  useEffect(() => {
    axios.get(url + projectId).then((res) => {
      setCaseStudyData(res.data);
    });
  }, []);

  const deletePost = () => {
    axios.delete(url + projectId).then(() => {
      alert('Are you sure you want to delete this project?');
      history.push('/backHomePage');
    });
  };

  const routeBackHome = () => {
    history.push('/backHomePage');
  };

  const editFormPage = () => {
    history.push(`/edit-page/${projectId}`);
  };

  return (
    <div>
      <ProjectContainer>
        <Header>
          {caseStudyData.name}
          <div className='bottomControlBtn'>
            <button onClick={editFormPage} id='editBtn'>
              Edit
            </button>
            <br />
            <button onClick={deletePost} id='deleteBtn'>
              Delete
            </button>
            <br />
            <button onClick={routeBackHome} id='homeBtn'>
              Home
            </button>
          </div>
        </Header>

        <Image src={caseStudyData.image} alt='Company Homepage'></Image>

        <Label>Description: </Label>
        <Text>{caseStudyData.description}</Text>

        <Label>Findings: </Label>
        <Text>{caseStudyData.findings}</Text>

        <Label>Discussion: </Label>
        <Text>{caseStudyData.discussion}</Text>

        <Label>Conclusion: </Label>
        <Text>{caseStudyData.conclusion}</Text>

        <Label>Recommendations: </Label>
        <Text>{caseStudyData.recommendations}</Text>

        <Label>Description: </Label>
        <Text>{caseStudyData.implementation}</Text>

        <Label>References: </Label>
        <Text>{caseStudyData.references}</Text>

        <Label>Appendices: </Label>
        <Text>{caseStudyData.appendices}</Text>
      </ProjectContainer>
    </div>
  );
};

BackDetailPage.propTypes = {
  buttonsToRender: PropTypes.string,
};

export default BackDetailPage;
