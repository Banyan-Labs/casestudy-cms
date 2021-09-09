import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProjectContainer, Label, Name, Description, Findings, Discussion, Conclusion, Recommendations, Implementation, References, Appendices } from './style';
// import { projectData } from '../../data/projectData';

// import indeedHomePage from '../../images/indeedHomepage.jpg';

const DetailPage = ({ data }) => {
  let { projectId } = useParams();
  console.log(projectId);
  return (
    <ProjectContainer>

      <Name>{data[0].name}</Name>

      <Label>Description: </Label>
      <Description>{data[0].description}</Description>

      <Label>Findings: </Label>
      <Findings>{data[0].findings}</Findings>

      <Label>Discussion: </Label>
      <Discussion>{data[0].discussion}</Discussion>

      <Label>Conclusion: </Label>
      <Conclusion>{data[0].conclusion}</Conclusion>

      <Label>Recommendations: </Label>
      <Recommendations>{data[0].recommendations}</Recommendations>

      <Label>Descriptimplementationion: </Label>
      <Implementation>{data[0].implementation}</Implementation>

      <Label>References: </Label>
      <References>{data[0].references}</References>

      <Label>Appendices: </Label>
      <Appendices>{data[0].appendices}</Appendices>

      <Link to='#' id='edit'>
        Edit
      </Link>
      <Link to='#' id='delete'>
        Delete
      </Link>
      <br />
      <Link to='/' id='home'>
        Home
      </Link>
    </ProjectContainer>
  )
}

DetailPage.propTypes = {
  data: PropTypes.array,
};

export default DetailPage;