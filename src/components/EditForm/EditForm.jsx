/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Button, Label, Input, Textarea } from './style';

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

  const [pullPost, setPullPost] = useState([]);
  useEffect(() => {
    axios.get(url + projectId, postObject).then((res) => {
      setPullPost(res.data);
    });
  }, []);

  const editPost = () => {
    axios.patch(url + projectId, postObject).then((res) => {
      console.log(res.data);
    });
  };

  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/backDetails/${projectId}`);
  };

  return (
    <Container>
      <h1>Edit The Project</h1>
      <p>
        Edit only fields that need to be change. If field it correct, then leave
        blank.
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <Label>Project Name: </Label>
          <Input
            type={'input'}
            name={'projectName'}
            placeholder={pullPost.name}
            onChange={(event) => setProjectName(event.target.value)}
          />
          <br />
          <Label>Image URL: </Label>
          <Input
            type={'string'}
            name={'image'}
            placeholder={pullPost.image}
            onChange={(event) => setImage(event.target.value)}
          />
          <br />
          <Label>Description: </Label>
          <Textarea
            type={'textarea'}
            name={'description'}
            placeholder={pullPost.description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <br />
          <Label>Findings: </Label>
          <Textarea
            type={'textarea'}
            name={'findings'}
            placeholder={pullPost.findings}
            onChange={(event) => setFindings(event.target.value)}
          />
          <br />
          <Label>Discussion: </Label>
          <Textarea
            type={'textarea'}
            name={'discussion'}
            placeholder={pullPost.discussion}
            onChange={(event) => setDiscussion(event.target.value)}
          />
          <br />
          <Label>Conclusion: </Label>
          <Textarea
            type={'textarea'}
            name={'conclusion'}
            placeholder={pullPost.conclusion}
            onChange={(event) => setConclusion(event.target.value)}
          />
          <br />
          <Label>Recommendations: </Label>
          <Textarea
            type={'textarea'}
            name={'recommendations'}
            placeholder={pullPost.recommendations}
            onChange={(event) => setRecommendations(event.target.value)}
          />
          <br />
          <Label>Implementation: </Label>
          <Textarea
            type={'textarea'}
            name={'implementation'}
            placeholder={pullPost.implementation}
            onChange={(event) => setImplementation(event.target.value)}
          />
          <br />
          <Label>References: </Label>
          <Textarea
            type={'textarea'}
            name={'references'}
            placeholder={pullPost.references}
            onChange={(event) => setReferences(event.target.value)}
          />
          <br />
          <Label>Appendices: </Label>
          <Textarea
            type={'textarea'}
            name={'appendices'}
            placeholder={pullPost.appendices}
            onChange={(event) => setAppendices(event.target.value)}
          />
          <Button onClick={editPost} type='submit' value='Submit'>
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
