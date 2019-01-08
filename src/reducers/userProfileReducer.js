const userProfileInitialState = {
  name: "",
  email: "",
  gender: "",
  age: 0,
  policyRead: false,
  fetching: false,
  submitting: false
};

export default (state = userProfileInitialState, action) => {
  switch (action.type) {
    case "Get_Profile":
      return Object.assign({}, state, { fetching: true });

    case "Got_Profile":
      return Object.assign({}, state, action.data);

    case "Save_Profile":
      return Object.assign({}, state, { submitting: true });

    case "Profile_Saved":
      return Object.assign({}, state, { submitting: false });

    default:
      return state;
  }
};
