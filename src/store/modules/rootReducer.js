import { combineReducers } from 'redux';
import search from './search/reducer';
import cart from './cart/reducer';
import store from './store/reducer';

export default combineReducers({
  search,
  cart,
  store,
});
