import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "../actions/simpleAction";
import ChildApp from "../components/pages/simple";
import logo from "../images/logo.svg";
// import "../styles/simple/simple.css";
class simplePage extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit asd asd <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={this.simpleAction}> count redux action</button>
        <ChildApp simple={this.props.simple} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const simple = state.simpleReducer.result;
  return {
    simple: simple
  };
};

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(simplePage);
