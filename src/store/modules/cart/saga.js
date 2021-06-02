import { takeLatest, put, all } from 'redux-saga/effects';
import {
  cartAddProduct,
  cartAddProductFailure,
  cartDecreaseProduct,
} from './action';

export function* addProduct({ payload }) {
  try {
    const { product, products } = payload.value;
    const index = products.map((e) => e.id).indexOf(product.id);
    const sumOfQuantity = index
      ? products[index]?.quantity + product.quantity
      : product.quantity;

    if (product.stock - sumOfQuantity < 0)
      throw Error(
        `Quantidade além do estoque! Estoque total: ${product.stock}`
      );
    yield put(cartAddProduct({ index, product }));
    return '';
  } catch (err) {
    yield put(cartAddProductFailure(err.message));
    return err.message;
  }
}

export function* decreaseProduct({ payload }) {
  console.log(payload);
  try {
    const { product, products } = payload.value;
    const index = products.map((e) => e.id).indexOf(product.id);
    if (index < 0) throw Error('Erro');
    yield put(cartDecreaseProduct(index));
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest('CART_ADD_REQUEST', addProduct),
  takeLatest('CART_DECREASE_REQUEST', decreaseProduct),
]);
