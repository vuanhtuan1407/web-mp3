import { combineReducers } from "redux";
import listReducer from "./listReducer.js";
import playerReducer from "./playerReducer.js";
export const rootReducer = combineReducers({
  playerReducer,
  listReducer,
});
