import { combineReducers } from "redux";
import authReducer from "./auth";
import projectsReducer from "./projects";

export default combineReducers({
  auth: authReducer,
  projects: projectsReducer,
});
