import React, { Component } from "react";
import SimplePage from "./containers/simplePage";
import "./styles/main.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SimplePage />
      </div>
    );
  }
}
