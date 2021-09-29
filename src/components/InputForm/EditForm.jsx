/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { InputLabel } from './InputLabel';
import { Container, Button } from './style';

export default function EditForm() {
  const [projectName, setProjectName] = useState(null);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [findings, setFindings] = useState(null);
  const [discussion, setDiscussion] = useState(null);
  const [conclusion, setConclusion] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [implementation, setImplementation] = useState(null);
  const [references, setReferences] = useState(null);
  const [appendices, setAppendices] = useState(null);

  const postObject = {
    name: projectName,
    image: image,
    description: description,
    findings: findings,
    discussion: discussion,
    conclusion: conclusion,
    recommendations: recommendations,
    implementation: implementation,
    references: references,
    appendices: appendices,
  };

  let { projectId } = useParams();
  const url = 'http://localhost:8080/cases/';


  const editPost = () => {
    console.log("hello")
    axios.patch(url + projectId, postObject)
    .then((res) => {
      console.log(res.data);
      console.log(projectId)
    });
  }




// TESTING/DIDNT WORK
  // function editPost() {
  //   axios.patch(url + projectId, postObject).then((res) => {
  //     console.log(res.data);
  //     console.log(projectId)
  //   });
  // }

// TESTING/DIDNT WORK
  //   const [editPost, setEditPost] = useState([]);
  //   useEffect(() => {
  //     console.log({projectId})
  //     axios.patch(url + projectId, postObject).then((res) => {
  //       setEditPost(res.data);
  //   });
  // },[]);


  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/');
  };

  return (
    <Container>
      <h1>Edit The Project</h1>
      <p>Edit blah...</p>
      <div>
        <form onSubmit={handleSubmit}>
          <InputLabel
            title={'Project Name'}
            type={'projectName'}
            idValue={'projectName'}
            onChangeType={setProjectName}
            inputType={'input'}
          />
          <InputLabel
            title={'Image'}
            type={'string'}
            idValue={'image'}
            onChangeType={setImage}
            inputType={'input'}
          />
          <InputLabel
            title={'Synopsis/Executive Summary'}
            type={'description'}
            idValue={'description'}
            onChangeType={setDescription}
            inputType={'text'}
          />
          <InputLabel
            title={'Findings'}
            type={'findings'}
            idValue={'findings'}
            onChangeType={setFindings}
            inputType={'text'}
          />
          <InputLabel
            title={'Discussion'}
            type={'discussion'}
            idValue={'discussion'}
            onChangeType={setDiscussion}
            inputType={'text'}
          />
          <InputLabel
            title={'Conclusion'}
            type={'conclusion'}
            idValue={'conclusion'}
            onChangeType={setConclusion}
            inputType={'text'}
          />
          <InputLabel
            title={'Recommendations'}
            type={'recommendations'}
            idValue={'recommendations'}
            onChangeType={setRecommendations}
            inputType={'text'}
          />
          <InputLabel
            title={'Implementation'}
            type={'implementation'}
            idValue={'implementation'}
            onChangeType={setImplementation}
            inputType={'text'}
          />
          <InputLabel
            title={'References'}
            type={'references'}
            idValue={'references'}
            onChangeType={setReferences}
            inputType={'text'}
          />
          <InputLabel
            title={'Appendices'}
            type={'appendices'}
            idValue={'appendices'}
            onChangeType={setAppendices}
            inputType={'text'}
          />
          <Button onClick={editPost} type='submit' value='Submit'>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
