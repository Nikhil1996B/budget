import { combineReducers, legacy_createStore } from "redux";
import { entriesReducer } from "../reducers";

export default () =>
  legacy_createStore(
    combineReducers({
      entries: entriesReducer,
    }),
  );
