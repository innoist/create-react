export default (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      let old = state.result || 0;
      return {
        result: action.data + old
      };
    default:
      return state;
  }
};
