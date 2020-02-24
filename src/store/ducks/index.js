import { combineReducers } from "redux";
import branches from "./branches";
import security from "./security";
import todos from "./todos";
import users from "./users";
import reservations from "./reservations";
import vehicles from "./vehicles";

export default combineReducers({
  todos,
  branches,
  vehicles,
  reservations,
  users,
  security
});
