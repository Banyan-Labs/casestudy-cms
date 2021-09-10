import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProjectContainer, Label, Name, Image, Text, Links } from './style';

const DetailPage = ({ data }) => {
  console.log(data);
  let { projectId } = useParams();
  console.log(projectId);
  return (
    <div>
      {data
        .filter((project) => project.id === projectId)
        .map((project, index) => {
          console.log(project);
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
                  <Link to='#' id='edit'>
                    Edit
                  </Link>

                  <Link to='#' id='delete'>
                    Delete
                  </Link>

                  <Link to='/' id='home'>
                    Home
                  </Link>
                </Links>
              </ProjectContainer>
            </div>
          );
        })}
    </div>
  );
};

DetailPage.propTypes = {
  data: PropTypes.array,
};

export default DetailPage;
