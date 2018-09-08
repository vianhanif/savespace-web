import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import User from './User'

export default combineReducers({
  User,
  form: formReducer
});
