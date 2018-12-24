import React, { Component } from 'react';

export default class ChildApp extends Component {
    render() {
        return (
            <div>
                hellow world
            <div>
                {this.props.simple}
            </div>
            </div>
    );
}
}