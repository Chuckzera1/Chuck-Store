import { all } from 'redux-saga/effects';

import cart from './cart/saga';
import store from './store/saga';

export default function* rootSaga() {
  return yield all([cart, store]);
}
