import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { InputLabel } from './InputLabel';
import { Container, Button } from './style';

export default function InputForm() {
  const [projectName, setProjectName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [findings, setFindings] = useState('');
  const [discussion, setDiscussion] = useState('');
  const [conclusion, setConclusion] = useState('');
  const [recommendations, setRecommendations] = useState('');
  const [implementation, setImplementation] = useState('');
  const [references, setReferences] = useState('');
  const [appendices, setAppendices] = useState('');
  const baseURL = 'http://localhost:8080/cases/';
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

  function createPost() {
    axios.post(baseURL, postObject).then((res) => {
      console.log(res.data);
    });
  }
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/backHomePage');
  };

  return (
    <Container>
      <h1>Create a New Project</h1>
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
          <Button onClick={createPost} type='submit' value='Submit'>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
