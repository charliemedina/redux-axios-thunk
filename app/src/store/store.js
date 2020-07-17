import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers";

const reducer = combineReducers(reducers);

const enhancers = [];
const windowIfDefined = typeof window === "undefined" ? null : window;
if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(reducer, applyMiddleware(thunk), ...enhancers);

export default store;
