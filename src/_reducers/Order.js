import _ from 'lodash'
import * as types from '../_constants/Order'

export default function(
  state = {
    list: [],
    order: null
  },
  action
) {
  switch (action.type) {
    case types.SET_ORDERS:
      return {...state, list: _.uniqBy([...state.list, ...action.payload],'id')}
    case types.CLEAR_ORDERS:
      return {...state, list: []}
    case types.PICK_ORDER:
      return {...state, order: action.payload}
    case types.CLEAR_ORDER:
      return {...state, order: null}
    default:
      return state
  }
}
