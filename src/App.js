import React, { Component } from "react";
import SimplePage from "./containers/simplePage";
import "./styles/App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SimplePage />
      </div>
    );
  }
}
