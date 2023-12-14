import { take, call, put } from "redux-saga/effects";
import { types } from "../actions";
import axios from "axios";

export function* deleteEntrySaga() {
  const { payload } = yield take(types.REMOVE_ENTRY);
  yield call(deleteEntrie, payload.id);
  put({ type: types.REMOVE_ENTRY_RESULT, payload });
}

function deleteEntrie(id) {
  axios.delete(`https://t9h6c7-3001.csb.app/entries/${id}`);
  axios.delete(`https://t9h6c7-3001.csb.app/values/${id}`);
}
