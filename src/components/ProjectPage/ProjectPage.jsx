import React, { useState, useEffect } from "react";
import SearchBar from './../SearchBar/SearchBar'
import { BrowserRouter } from "react-router-dom";
import { Container, Wrapper1, Wrapper2 } from "./style";
import ProjectList from './../ProjectList/ProjectList';
// import PreviousTitle from "./PreviousProject/PreviousTitle";
import axios from "axios";

const ProjectPage = () => {
    const url = 'http://localhost:8080/cases/';
      const [input, setInput] = useState("");
  const [caseStudyData, setCaseStudyData] = useState([]);
  const apiGetAllProjectData = async () => {
    await axios
      .get(url)
      .then((res) => {
        if (res.data) {
          setCaseStudyData(res.data);
        }
      })
      .catch((err) => console.error(err.message));
  };
  useEffect(() => {
    apiGetAllProjectData();
  }, []);
  return (
    <BrowserRouter>
      <Container>
        <Wrapper1>
          {/* <PreviousTitle /> */}
          <SearchBar updateInput={setInput} />
        </Wrapper1>
        <Wrapper2>
          {caseStudyData && (
            <ProjectList
              ProjectList={caseStudyData}
              searchQuery={input}
            />
          )}
        </Wrapper2>
      </Container>
    </BrowserRouter>
  );
};
export default ProjectPage;