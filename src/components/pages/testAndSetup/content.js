import React, { useState } from "react";
import { Button, Container, Image } from "semantic-ui-react";
import HasMediaPermission from "../../../businessLogic/hasMediaPermission";
import Device from "../../../businessLogic/devices";

import videoCamera from "../../../images/videoCamera.svg";

export default function content(props) {
  let simpleAction = event => {
    props.simpleAction();
  };

  console.log("props", props);
  const [count, setCount] = useState(1);
  var camAndMicPermissionToAsk = "";
  const ImageExampleImage = () => <Image src={videoCamera} size="small" />;

  return (
    <Container>
      {count}
      <br />
      <Button onClick={() => setCount(count + 1)}>Click Herere</Button>

      <Button
        onClick={() => {
          simpleAction();
        }}
      >
        Redux Button {props.simple}
      </Button>

      <HasMediaPermission />
      <Device />
    </Container>
  );
}
