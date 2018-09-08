import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import testReducer from './testReducers';
import homeReducers from './homeReducers';
import detailReducers from './detailReducers';
import cartReducers from './cartReducers';
import shippingReducers from './shippingReducers';
import categoryReducers from './categoryReducers';
import SearchReducers from './searchReducers';
import VendorReducers from './vendorReducers';

export default combineReducers({
  testReducer,
  homeReducers,
  detailReducers,
  cartReducers,
  shippingReducers,
  categoryReducers,
  SearchReducers,
  VendorReducers,
  form: formReducer
});
