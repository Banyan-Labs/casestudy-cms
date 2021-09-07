/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
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
            type={'file'}
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
          <Button type='submit' value='Submit'>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
