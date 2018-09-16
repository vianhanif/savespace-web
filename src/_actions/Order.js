import axios from 'axios';
import * as types from '../_constants/Order'

export function getOrders() {
  return async dispatch => {
    // let response = await axios.get(JSON.stringify(require().default))
    let response = require('../_mocks/orders.json')
    if (response.code === 'SUCCESS') {
        return dispatch({ type: types.SET_ORDERS, payload: response.result })
    }
    return dispatch({ type: types.SET_ORDERS, payload: [] })
  };
}

export const pickOrder = (item) => {
  return dispatch => dispatch({
    type: types.PICK_ORDER,
    payload: item
  })
}

export const clearOrder = (item) => {
  return dispatch => dispatch(types.CLEAR_ORDER)
}