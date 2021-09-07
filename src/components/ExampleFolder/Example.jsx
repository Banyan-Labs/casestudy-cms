import React, { useState } from 'react';
import { Container, Button, Paragraph } from './style';

const Example = () => {
  const [exampleState, setExampleState] = useState(false);
  return (
    <Container>
      <Button onClick={() => setExampleState(!exampleState)}>Click Me</Button>
      <Paragraph>{exampleState}</Paragraph>
    </Container>
  );
};

export default Example;
