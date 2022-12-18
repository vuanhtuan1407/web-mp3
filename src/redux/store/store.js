import { createStore } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhacers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhacers);
