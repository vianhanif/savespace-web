import axios from 'axios';
import * as types from '../_constants/Category'

export function getCategories() {
  return async dispatch => {
    // let response = await axios.get(JSON.stringify(require().default))
    let response = require('../_mocks/categories.json')
    if (response.code === 'SUCCESS') {
        return dispatch({ type: types.SET_CATEGORIES, payload: response.result })
    }
    return dispatch({ type: types.SET_CATEGORIES, payload: [] })
  };
}

export const pickCategory = (item) => {
  return dispatch => dispatch({
    type: types.PICK_CATEGORY,
    payload: item
  })
}

export const clearCategory = (item) => {
  return dispatch => dispatch(types.CLEAR_CATEGORY)
}