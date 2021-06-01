export function loadStoreProducts(value) {
  return {
    type: 'LOAD_STORE',
    payload: { value },
  };
}

export function loadStoreFail(value) {
  return {
    type: 'LOAD_FAIL',
    payload: { value },
  };
}

export function loadStoreData() {
  return {
    type: 'LOAD_DATA',
  };
}
