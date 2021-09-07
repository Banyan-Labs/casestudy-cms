/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Container, Label, Input, Textarea, Button, } from './style';

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


    const handleSubmit = (errors, event) => {
        event.preventDefault();
        console.log(errors, event)
    };

    return (
        <Container>
            <h1>Create a New Project</h1>
            <div>
                <form onSubmit={handleSubmit}>

                    <Label>
                        <p className="input-text">Project Name:</p>
                        <Input
                            type="text"
                            id="projectName"
                            name="projectName"
                            onChange={event => setProjectName(event.target.value)} required />
                    </Label>

                    <Label>
                        <p className="input-text">Image:</p>
                        <Input
                            type="file"
                            id="image"
                            name="image"
                            onChange={event => setImage(event.target.value)} />
                    </Label>

                    <Label>
                        <p className="input-text">Synopsis/Executive Summary:</p>
                        <Textarea
                            type="text"
                            id="description"
                            name="description"
                            onChange={event => setDescription(event.target.value)}>
                        </Textarea>
                    </Label>

                    <Label>
                        <p className="inputText">Findings:</p>
                        <Textarea
                            type="text"
                            id="findings"
                            name="findings"
                            onChange={event => setFindings(event.target.value)}>
                        </Textarea>
                    </Label>

                    <Label>
                        <p className="inputText">Discussion:</p>
                        <Textarea
                            type="text"
                            id="discussion"
                            name="discussion"
                            onChange={event => setDiscussion(event.target.value)}>
                        </Textarea>
                    </Label>

                    <Label>
                        <p className="inputText">Conclusion:</p>
                        <Textarea
                            type="text"
                            id="conclusion"
                            name="conclusion"
                            onChange={event => setConclusion(event.target.value)}>
                        </Textarea>
                    </Label>

                    <Label>
                        <p className="inputText">Recommendations:</p>
                        <Textarea
                            type="text"
                            id="recommendations"
                            name="recommendations"
                            onChange={event => setRecommendations(event.target.value)}>
                        </Textarea>
                    </Label>

                    <Label>
                        <p className="inputText">Implementation:</p>
                        <Textarea
                            type="text"
                            id="implementation"
                            name="implementation"
                            onChange={event => setImplementation(event.target.value)}>
                        </Textarea>
                    </Label>

                    <Label>
                        <p className="inputText">References:</p>
                        <Textarea
                            type="text"
                            id="references"
                            name="references"
                            onChange={event => setReferences(event.target.value)}>
                        </Textarea>
                    </Label>

                    <Label>
                        <p className="inputText">Appendices:</p>
                        <Textarea
                            type="text"
                            id="appendices"
                            name="appendices"
                            onChange={event => setAppendices(event.target.value)}>
                        </Textarea>
                    </Label>

                    <Button type="submit" value="Submit">Submit</Button>
                </form>
            </div>
        </Container>
    );
}
