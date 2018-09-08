import {combineReducers} from 'redux';
import {reducer} from 'redux-form';
import User from './User'
import Space from './Space'

export default combineReducers({
  User,
  Space,
  form: reducer
});
