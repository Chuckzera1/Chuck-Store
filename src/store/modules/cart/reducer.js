import produce from 'immer';

const INITAL_STATE = {
  products: [],
  error: null,
};

export default function cart(state = INITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'CART_REMOVE':
        draft.products = draft.products.filter(
          (p) => p.id !== action.payload.value.id
        );
        break;
      case 'CART_DECREASE':
        draft.products[action.payload.value.index].quantity -= 1;
        draft.products[action.payload.value.index].stock += 1;
        break;
      case 'CART_INCREASE':
        draft.products[action.payload.value.index].quantity += 1;
        draft.products[action.payload.value.index].stock -= 1;
        break;
      case 'CART_ADD':
        // Se já existir no carrinho, ele adiciona a quantidade selecionada
        if (action.payload.value.index > -1)
          draft.products[action.payload.value.index].quantity +=
            action.payload.value.product.quantity;
        else draft.products.push(action.payload.value.product);
        draft.error = null;
        break;

      case 'CART_ADD_FAILURE':
        draft.error = action.payload.value;
        break;

      case 'CART_CLEAR':
        draft.products = [];
        break;

      default:
        break;
    }
  });
}
