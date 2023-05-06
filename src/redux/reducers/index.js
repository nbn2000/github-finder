import { combineReducers } from "redux";
import { mainReducer } from "./general";
// IN CASE FOR FURTHER VERSION FOR MORE REDUCERS AND TRY TO MAKE OFFICIAL
export const combineReducer = combineReducers({
  mainReducer,
});
