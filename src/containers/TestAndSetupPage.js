import React, { Component } from "react";
import { connect } from "react-redux";
import { simpleAction } from "../actions/simpleAction";
import TestAndSetupContent from "../components/pages/testAndSetup/content";

// import "../styles/simple/simple.css";
class simplePage extends Component {
  simpleAction = event => {
    this.props.simpleAction();
  };
  render() {
    // console.log('this.props.simple',this.props.simple);
    return (
      <div>
        <TestAndSetupContent
          simple={this.props.simple}
          simpleAction={this.props.simpleAction}
        />
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
