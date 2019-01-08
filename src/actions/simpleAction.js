export const simpleAction = () => dispatch => {
  dispatch({
    type: "SIMPLE_ACTION",
    data: 1
  });
};
