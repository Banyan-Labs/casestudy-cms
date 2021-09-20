import React from 'react';
import axios from ' axios ';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProjectContainer, Label, Name, Image, Text, Links } from './style';

const caseStudyURL = '/localhost8080/cases/';

const DetailPage = ({ data, buttonsToRender }) => {
  const [post, setPost] = React.useState(null);
  let { projectId } = useParams();

  React.useEffect(() => {
    axios.get('http://caseStudyURL' + projectId).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      {data
        .filter((project) => project.id === projectId)
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
                    <Link to='/' id='home'>
                      Home
                    </Link>
                  ) : (
                    <div>
                      <Link to='#' id='edit'>
                        Edit
                      </Link>
                      <Link to='#' id='delete'>
                        Delete
                      </Link>
                      <Link to='/' id='home'>
                        Home
                      </Link>
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
  data: PropTypes.array,
  buttonsToRender: PropTypes.string,
};

export default DetailPage;
