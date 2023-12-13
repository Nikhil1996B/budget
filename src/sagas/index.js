import * as getAllEntries from "./entriesSaga";

function initSaga(sagaMiddleware) {
  Object.values(getAllEntries).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

export default initSaga;
