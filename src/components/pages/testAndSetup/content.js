import React, { useState } from "react";
import { Button, Container } from "semantic-ui-react";
import checkMediaPermission from "../../../businessLogic/checkMediaPermission";
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
  const hasPermission = checkMediaPermission();
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
      <div>Your permission is : {hasPermission.toString()}</div>
    </Container>
  );
}
