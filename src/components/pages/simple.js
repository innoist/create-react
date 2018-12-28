import React, { Component } from "react";
import { Button } from "semantic-ui-react";
export default class ChildApp extends Component {
  render() {
    return (
      <div className="simple">
        hellow world
        <div>{this.props.simple}</div>
        <div className="button demo">
          <div className="ui button">View</div>
          <div className="ui primary button">
            <i className="shop icon" /> Add to Cart
          </div>
        </div>
        <Button>Click Here</Button>
      </div>
    );
  }
}
