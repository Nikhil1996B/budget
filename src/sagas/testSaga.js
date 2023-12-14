import {
  take,
  put,
  delay,
  call,
  takeEvery,
  fork,
  cancelled,
  cancel,
  takeLatest,
} from "redux-saga/effects";

function double(number) {
  return number * 2;
}

export function* testSaga() {
  while (true) {
    console.log("Starting saga");
    const state = yield take("TEST_MESSAGE");
    const a = yield call(double, 2);
    console.log(a);
    const b = yield double(3);
    console.log(b);
    console.log("finished saga function", state);
  }
}

export function* testSagaTakeEveryProcess({ payload }) {
  console.log(`Starting the process for index ${payload}`);
  yield delay(3000);
  console.log(`Ending the process for index ${payload}`);
}

export function* testTakeEvery() {
  const { payload } = yield takeEvery(
    "TEST_MESSAGE_3",
    testSagaTakeEveryProcess,
  );
  console.log(`Finish takeEvery for index ${payload}`);
}

function* infiniteSaga() {
  console.log("Starting infinite saga");
  let index = 0;
  while (true) {
    index++;
    try {
      console.log("inside infinite loop", +index);
      yield delay(500);
    } catch (error) {
      console.log(error + "failed");
    } finally {
      console.log("The fork was cancelled? " + index, cancelled);
    }
  }
  console.log("Ending infinite saga");
}

// CANCEL and CANCELLED example with take
export function* testSagaCancelled() {
  yield take("TEST_MESSAGE_4");
  const handleCancel = yield fork(infiniteSaga);
  yield delay(3000);
  yield cancel(handleCancel);
}

// take latest
export function* testSagaTakeLatest() {
  yield takeLatest("TEST_MESSAGE_5", infiniteSaga);
}

export function* dispatchTest() {
  yield delay(1000);
  // yield put({ type: "TEST_MESSAGE_5", payload: 1 });
  while (true) {
    yield delay(1000);
    yield put({ type: "TEST_MESSAGE_5", payload: 1000 });
  }
}
