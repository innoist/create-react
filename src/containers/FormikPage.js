import React, { Component } from "react";
import { connect } from "react-redux";
import FormikTest from "../components/pages/formik/formikTest";

class FormikPage extends Component {
  render() {
    return (
      <FormikTest
        userProfile={this.props.userProfile}
        dispatch={this.props.dispatch}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userProfile: state.userProfileReducer
  };
};
export default connect(mapStateToProps)(FormikPage);
