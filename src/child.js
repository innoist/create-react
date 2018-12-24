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
            <Button>Click Here</Button>
            </div>
    );
}
}