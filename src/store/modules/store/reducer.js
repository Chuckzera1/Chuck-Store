import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  loaded: false,
  error: null,
};

export default function store(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'LOAD_STORE':
        draft.data = action.payload.value;
        draft.loaded = true;
        draft.loading = false;
        break;
      case 'LOAD_DATA':
        draft.loading = true;
        break;
      case 'LOAD_FAIL':
        draft.error = action.payload.value;
        break;
      case 'UPDATE_QUANTITY':
        draft.data[action.payload.value.id - 1].quantity =
          action.payload.value.quantity;
        break;
      case 'RESET_QUANTITY':
        draft.data = draft.data.map((d) => ({ ...d, quantity: 0 }));
        break;
      default:
        break;
    }
  });
}
