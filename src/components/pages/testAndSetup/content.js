import React, { useState } from "react";
import { Button, Container, Image } from "semantic-ui-react";
import HasMediaPermission from "../../../businessLogic/hasMediaPermission";
import videoCamera from "../../../images/videoCamera.svg";

// export default class Content extends Component {
//   state = {
//     count: 1
//   };
//   render() {
//     return (
//       <Container>
//         {this.state.count}
//         <br />
//         <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click Here ssadcls
//         </Button>
//       </Container>
//     );
//   }
// }

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
      <Button onClick={() => setCount(count + 1)}>Click Here ssad</Button>

      <Button
        onClick={() => {
          simpleAction();
        }}
      >
        Redux Button {props.simple}
      </Button>

      <HasMediaPermission />
    </Container>
  );
}
