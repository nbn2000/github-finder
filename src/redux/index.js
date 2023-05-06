import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducer } from "./reducers/index";

export const mainStore = createStore(combineReducer, compose(applyMiddleware(thunk)));
// IN CASE FOR ACTION BEFORE DISPATCH \/
export const createMainStore = () => {
  return createStore(combineReducer, compose(applyMiddleware(thunk)));
};

