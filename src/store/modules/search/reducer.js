import produce from 'immer';

const INITIAL_STATE = {
  searchValue: '',
};

export default function search(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SEARCH_UPDATE':
        draft.searchValue = action.payload.value;
        break;
      default:
        break;
    }
  });
}
