import React, { useState } from "react";
import { Button, Container } from "semantic-ui-react";

export default function content(props) {
  let simpleAction = event => {
    props.simpleAction();
  };
  console.log("props", props);
  const [count, setCount] = useState(1);

  return (
    <Container>
      {count}
      <br />
      <Button onClick={() => setCount(count + 1)}>Click Here ssad</Button>

      <Button
        onClick={() => {
          simpleAction();
        }}
      >
        Redux Button counter {props.simple}
      </Button>
    </Container>
  );
}
