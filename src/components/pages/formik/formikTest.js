import React, { useState, useEffect } from "react";
import {
  fetchUserProfile,
  gotUserProfile,
  submitUserProfile,
  userProfileSaved
} from "../../../actions/userProfileActions";

export default function content(props) {
  useEffect(() => {
    props.dispatch(fetchUserProfile());
  }, []);
  console.log(props.userProfile);
  return (
    <div>
      Hello World
      <label>{props.userProfile.fetching.toString()}</label>
    </div>
  );
}
