import { takeLatest, put, all } from 'redux-saga/effects';
import { resetQuantity, updateQuantityProductStore } from '../store/action';
import {
  cartAddProduct,
  cartAddProductFailure,
  cartClearProducts,
  cartDecreaseProduct,
  cartIncreaseProduct,
  cartRemoveProduct,
} from './action';

export function* addProduct({ payload }) {
  try {
    const { product, products } = payload.value;
    const index = products.map((e) => e.id).indexOf(product.id);
    const sumOfQuantity = products[index]
      ? products[index].quantity + product.quantity
      : product.quantity;

    if (product.stock - sumOfQuantity < 0)
      throw Error(
        `Quantidade além do estoque! Estoque total: ${product.stock}`
      );
    yield all([
      put(cartAddProduct({ index, product })),
      put(
        updateQuantityProductStore({
          id: product.id,
          quantity: sumOfQuantity,
        })
      ),
    ]);
  } catch (err) {
    yield put(cartAddProductFailure(err.message));
  }
}

export function* decreaseProduct({ payload }) {
  try {
    const { product, products } = payload.value;
    const index = products.map((e) => e.id).indexOf(product.id);
    if (index < 0) throw Error('Erro');
    yield all([
      put(cartDecreaseProduct({ index })),
      put(
        updateQuantityProductStore({
          id: product.id,
          quantity: product.quantity - 1,
        })
      ),
    ]);
  } catch (err) {
    console.log(err);
  }
}

export function* increaseProduct({ payload }) {
  try {
    const { product, products } = payload.value;
    const index = products.map((e) => e.id).indexOf(product.id);
    if (index < 0) throw Error('Erro');
    yield all([
      put(cartIncreaseProduct({ index })),
      put(
        updateQuantityProductStore({
          id: product.id,
          quantity: product.quantity + 1,
        })
      ),
    ]);
  } catch (err) {
    console.log(err);
  }
}

export function* removeProduct({ payload }) {
  try {
    const { id } = payload.value;
    yield all([
      put(cartRemoveProduct({ id })),
      put(
        updateQuantityProductStore({
          id,
          quantity: 0,
        })
      ),
    ]);
  } catch (err) {
    console.log(err);
  }
}

export function* cartClear() {
  try {
    yield all([put(resetQuantity()), put(cartClearProducts())]);
  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest('CART_ADD_REQUEST', addProduct),
  takeLatest('CART_DECREASE_REQUEST', decreaseProduct),
  takeLatest('CART_INCREASE_REQUEST', increaseProduct),
  takeLatest('CART_CLEAR_REQUEST', cartClear),
  takeLatest('REMOVE_PRODUCT_REQUEST', removeProduct),
]);
