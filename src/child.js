import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
export default class ChildApp extends Component {
    render() {
        return (
            <div>
                hellow world
            <div>
                {this.props.simple}
            </div>
            <div class="button demo">
  <div class="ui button">
    View
  </div>
  <div class="ui primary button">
    <i class="shop icon"></i> Add to Cart
  </div>
  </div>
            <Button>Click Here</Button>
            </div>
    );
}
}