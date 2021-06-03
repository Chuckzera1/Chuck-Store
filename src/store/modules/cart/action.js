export function removeProduct(value) {
  return {
    type: 'REMOVE_PRODUCT_REQUEST',
    payload: { value },
  };
}

export function cartRemoveProduct(value) {
  return {
    type: 'CART_REMOVE',
    payload: { value },
  };
}

export function increaseProduct(value) {
  return {
    type: 'CART_INCREASE_REQUEST',
    payload: { value },
  };
}

export function cartIncreaseProduct(value) {
  return {
    type: 'CART_INCREASE',
    payload: { value },
  };
}

export function cartDecreaseProduct(value) {
  return {
    type: 'CART_DECREASE',
    payload: { value },
  };
}

export function decreaseProduct(value) {
  return {
    type: 'CART_DECREASE_REQUEST',
    payload: { value },
  };
}

export function cartClearRequest() {
  return {
    type: 'CART_CLEAR_REQUEST',
  };
}

export function cartClearProducts() {
  return {
    type: 'CART_CLEAR',
  };
}

export function addProduct(value) {
  return {
    type: 'CART_ADD_REQUEST',
    payload: { value },
  };
}

export function cartAddProduct(value) {
  return {
    type: 'CART_ADD',
    payload: { value },
  };
}

export function cartAddProductFailure(value) {
  return {
    type: 'CART_ADD_FAILURE',
    payload: { value },
  };
}
