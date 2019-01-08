import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import userProfileReducer from "./userProfileReducer";
export default combineReducers({
  simpleReducer,
  userProfileReducer
});
