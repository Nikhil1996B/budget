import { combineReducers, legacy_createStore } from "redux";
import { entriesReducer, modalReducer } from "../reducers";

export default () =>
  legacy_createStore(
    combineReducers({
      entries: entriesReducer,
      modal: modalReducer,
    }),
  );
