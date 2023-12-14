import { takeLatest, call, put } from "redux-saga/effects";
import { types } from "../actions";
import axios from "axios";

export function* addEntrySaga() {
  const { payload } = yield takeLatest(types.ADD_ENTRY);
  yield call(addEntrie, payload);
  put({ type: types.ADD_ENTRY_RESULT, payload });
}

function addEntrie({ payload }) {
  const { id, description, value, isExpense } = payload;
  axios.post(`https://t9h6c7-3001.csb.app/entries`, { id, description });
  axios.post(`https://t9h6c7-3001.csb.app/values`, { id, value, isExpense });
}
