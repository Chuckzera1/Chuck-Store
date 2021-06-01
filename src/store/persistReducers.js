import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'chuckStore',
      storage,
      whitelist: ['cart', 'store'],
    },
    reducers
  );

  return persistedReducer;
};
