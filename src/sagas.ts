import { getShows } from "./api";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { showsFetchedAction, SHOWS_FETCH } from "./actions";
import createSagaMiddleware from "@redux-saga/core";
import { AnyAction } from "redux";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchShowsSaga(action: AnyAction): Generator<any, any, any> {
  yield delay(1000);
  if (!action.payload) {
    return;
  }

  const query = action.payload;
  const data = yield call(getShows, query);
  yield put(showsFetchedAction(query, data));
}

export function* rootSaga() {
  yield takeLatest(SHOWS_FETCH, fetchShowsSaga);
}
