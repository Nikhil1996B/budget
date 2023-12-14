import * as getAllEntries from "./entriesSaga";
import * as entriesSagaDeletion from "./entriesSagaDeletion";
import * as addEntrySaga from "./entriesSagaAddition";

function initSaga(sagaMiddleware) {
  Object.values(getAllEntries).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaDeletion).forEach(
    sagaMiddleware.run.bind(sagaMiddleware),
  );
  Object.values(addEntrySaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}

export default initSaga;
