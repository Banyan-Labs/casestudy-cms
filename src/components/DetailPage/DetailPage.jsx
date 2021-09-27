/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import { ProjectContainer, Label, Name, Image, Text, Links } from './style';

const DetailPage = ({ buttonsToRender }) => {
  let { projectId } = useParams();
  let history = useHistory();
  const url = 'http://localhost:8080/cases/';

  const [caseStudyData, setCaseStudyData] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setCaseStudyData(res.data);
    });
  }, []);

  const deletePost = () => {
    axios.delete(url + projectId).then(() => {
      alert('Are you sure you want to delete this project?');
      history.push('/');
    });
  };

  const routeBackHome = () => {
    history.push('/');
  };

  const editFormPage = () => {
    history.push('/input-page');
  };

  return (
    <div>
      {caseStudyData
        .filter((project) => project._id === projectId)
        .map((project, index) => {
          return (
            <div key={index}>
              <ProjectContainer>
                <Name>{project.name}</Name>

                <Image src={project.image} alt='Company Homepage'></Image>

                <Label>Description: </Label>
                <Text>{project.description}</Text>

                <Label>Findings: </Label>
                <Text>{project.findings}</Text>

                <Label>Discussion: </Label>
                <Text>{project.discussion}</Text>

                <Label>Conclusion: </Label>
                <Text>{project.conclusion}</Text>

                <Label>Recommendations: </Label>
                <Text>{project.recommendations}</Text>

                <Label>Description: </Label>
                <Text>{project.implementation}</Text>

                <Label>References: </Label>
                <Text>{project.references}</Text>

                <Label>Appendices: </Label>
                <Text>{project.appendices}</Text>

                <Links>
                  {buttonsToRender === 'frontend' ? (
                    <button onClick={routeBackHome}>Home</button>
                  ) : (
                    <div className='bottomControlBtn'>
                      <button onClick={editFormPage} id='editBtn'>
                        Edit
                      </button>
                      <button onClick={deletePost} id='deleteBtn'>
                        Delete
                      </button>
                      <button onClick={routeBackHome} id='homeBtn'>
                        Home
                      </button>
                    </div>
                  )}
                </Links>
              </ProjectContainer>
            </div>
          );
        })}
    </div>
  );
};

DetailPage.propTypes = {
  buttonsToRender: PropTypes.string,
};

export default DetailPage;
