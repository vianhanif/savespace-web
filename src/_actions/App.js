import axios from 'axios';
import * as types from '../_constants/App'

export function setTitle(value) {
  return dispatch => {
    return dispatch({ type: types.SET_TITLE, payload: value })
  };
}
