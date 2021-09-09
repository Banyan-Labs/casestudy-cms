import React from 'react';
import PropTypes from 'prop-types';

import { ProjectContainer, Label, Name, Description, Findings, Discussion, Conclusion, Recommendations, Implementation, References, Appendices } from './style';
// import { projectData } from '../../data/projectData';

// import indeedHomePage from '../../images/indeedHomepage.jpg';

const DetailPage = ({ data }) => {

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


    </ProjectContainer>
  );
};

DetailPage.propTypes = {
  data: PropTypes.array,
};

export default DetailPage;






// import React from 'react';
// import { ProjectContainer } from './style';
// import indeedHomePage from '../../images/indeedHomepage.jpg';



//         <a href='#' id='edit'>
//           Edit
//         </a>
//         <a href='#' id='delete'>
//           Delete
//         </a>
//         <br />
//         <a href='#' id='home'>
//           Home
//         </a>
//       </div>
//     </ProjectContainer>
//   );
// };

// export default DetailPage;