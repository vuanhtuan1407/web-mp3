import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhacers = composeWithDevTools();
export const store = createStore(rootReducer, composeEnhacers);
