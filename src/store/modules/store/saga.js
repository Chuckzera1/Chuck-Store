import { takeLatest, put, all, call } from 'redux-saga/effects';
import api from 'services/api';
import { loadStoreProducts, loadStoreFail } from './action';

export function* loadStoreData() {
  try {
    const { data } = yield call(api.get, 'product');
    data.map((d) => ({
      ...d,
      quantity: 0,
    }));
    yield put(loadStoreProducts(data));
  } catch (err) {
    yield put(loadStoreFail(err));
  }
}

export default all([takeLatest('LOAD_DATA', loadStoreData)]);
