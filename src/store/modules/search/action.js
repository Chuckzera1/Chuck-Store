export function searchValueUpdate(value) {
  return {
    type: 'SEARCH_UPDATE',
    payload: { value },
  };
}
