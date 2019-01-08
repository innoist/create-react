const fetchedUserProfile = {
  name: "Test Pesron",
  email: "test@aa.com",
  gender: "female",
  age: 30,
  policyRead: false,
  fetching: false,
  submitting: false
};

export const fetchUserProfile = () => dispatch => {
  dispatch({
    type: "Get_Profile"
  });
  setTimeout(() => {
    dispatch(gotUserProfile(fetchedUserProfile));
  }, 3000);
};

export const gotUserProfile = userProfile => dispatch => {
  dispatch({
    type: "Got_Profile",
    data: userProfile
  });
};

export const submitUserProfile = userProfile => dispatch => {
  dispatch({
    type: "Save_Profile",
    data: userProfile
  });
};

export const userProfileSaved = () => dispatch => {
  dispatch({
    type: "Profile_Saved"
  });
};
