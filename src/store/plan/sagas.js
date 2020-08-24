import { takeEvery, put, call, spawn } from 'redux-saga/effects';

import actions from './actions';
import * as service from './serviceApi';

export function* fetchSaga(action) {
  try {
    const response = yield call(service.fetch, action.id);
    yield put(actions.fetchSuccess(response.data));
  } catch (error) {
    console.log('여행계획 조회', error);
  }
}

export function* watchSaga() {
  yield takeEvery(actions.FETCH, fetchSaga);
}

export default function* rootSaga() {
  yield spawn(watchSaga);
}