import { all } from 'redux-saga/effects';
import planSagas from './plan/sagas';


export default function* rootSaga() {
  yield all([
    planSagas(),
  ]);
}