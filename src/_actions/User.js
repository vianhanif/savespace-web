import axios from 'axios';
import * as types from '../_constants/User'

export function getUser() {
  return async dispatch => {
    let user = localStorage.getItem(types.CURRENT_USER)
    if (user) {
        return dispatch({ type: types.SET_USER, payload: user })
    } 
    return dispatch({ type: types.SET_USER, payload: null })
  };
}
