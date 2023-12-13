import { take, call, put, fork } from "redux-saga/effects";
import types from "../actions/types";
import axios from "axios";
import { populateEntries } from "../actions/entries";
// async function fetchInitialData() {
//   const result = await axios.get("https://t9h6c7-3001.csb.app/entries");
//   return result.data;
// }

export function* getAllEntries() {
  yield take(types.GET_ENTRIES);
  //   const result = yield call(fetchInitialData);
  const result = yield call(axios, "https://t9h6c7-3001.csb.app/entries");
  yield put(populateEntries(result.data));
}

export function* getEntryDetails(id) {
  const { data } = yield call(
    axios,
    `https://t9h6c7-3001.csb.app/values/${id}`,
  );
  console.log(data);
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(types.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
