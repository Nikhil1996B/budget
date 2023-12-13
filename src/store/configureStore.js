import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { entriesReducer, modalReducer } from "../reducers";
import createSagaMiddleware from "@redux-saga/core";
import initSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export default () => {
  const store = legacy_createStore(
    combineReducers({
      entries: entriesReducer,
      modal: modalReducer,
    }),
    applyMiddleware(...middlewares),
  );
  initSaga(sagaMiddleware);
  return store;
};
