import {combineReducers} from 'redux';
import {reducer} from 'redux-form';
import App from './App'
import User from './User'
import Space from './Space'
import Category from './Category'

export default combineReducers({
  App,
  User,
  Space,
  Category,
  form: reducer
});
