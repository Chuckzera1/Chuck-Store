import { takeLatest, put, all } from 'redux-saga/effects';
import { cartAddProduct, cartAddProductFailure } from './action';

export function* addProduct({ payload }) {
  try {
    console.log(payload);
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
  } catch (err) {
    yield put(cartAddProductFailure(err.message));
  }
}

export default all([takeLatest('CART_ADD_REQUEST', addProduct)]);
