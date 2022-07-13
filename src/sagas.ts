import { getShow, getShowCast, getShowList } from "./api";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  showCastFetchedAction,
  showFetchedAction,
  showListFetchedAction,
  SHOW_CAST_FETCH,
  SHOW_FETCH,
  SHOW_LIST_FETCH,
} from "./actions";
import createSagaMiddleware from "@redux-saga/core";
import { AnyAction } from "redux";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchShowSaga(action: AnyAction): Generator<any, any, any> {
  const showId: number = action.payload;

  const data = yield call(getShow, showId);

  yield put(showFetchedAction(data));
}

export function* fetchShowListSaga(
  action: AnyAction
): Generator<any, any, any> {
  yield delay(1000);
  if (!action.payload) {
    return;
  }

  const query = action.payload;
  const data = yield call(getShowList, query);
  yield put(showListFetchedAction(query, data));
}

export function* fetchShowCastSaga(
  action: AnyAction
): Generator<any, any, any> {
  const showId = action.payload;
  const data = yield call(getShowCast, showId);
  const actors = data.map((d: any) => d.person);
  yield put(showCastFetchedAction(showId, actors));
}

export function* rootSaga() {
  yield takeLatest(SHOW_LIST_FETCH, fetchShowListSaga);
  yield takeLatest(SHOW_FETCH, fetchShowSaga);
  yield takeEvery(SHOW_CAST_FETCH, fetchShowCastSaga);
}
