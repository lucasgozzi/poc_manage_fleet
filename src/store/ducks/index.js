import { combineReducers } from "redux";

import todos from "./todos";
import branches from "./branches";
import vehicles from "./vehicles";
import users from "./users";
import security from "./security";

export default combineReducers({
  todos,
  branches,
  vehicles,
  users,
  security
});
