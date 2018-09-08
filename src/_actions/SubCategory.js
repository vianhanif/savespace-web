import axios from 'axios';
import * as types from '../_constants/SubCategory'

export function getSubCategories(id) {
  return async dispatch => {
    // let response = await axios.get(JSON.stringify(require().default))
    let response = require('../_mocks/sub_categories.json')
    if (response.code === 'SUCCESS') {
        return dispatch({ type: types.SET_SUB_CATEGORIES, payload: response.result })
    }
    return dispatch({ type: types.SET_SUB_CATEGORIES, payload: [] })
  };
}

export const pickSubCategory = (item) => {
  return dispatch => dispatch({
    type: types.PICK_SUB_CATEGORY,
    payload: item
  })
}

export const clearSubCategory = (item) => {
  return dispatch => dispatch(types.CLEAR_SUB_CATEGORY)
}
