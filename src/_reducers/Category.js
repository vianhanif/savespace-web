import _ from 'lodash'
import * as types from '../_constants/Category'

export default function(
  state = {
    list: [],
    category: null
  },
  action
) {
  switch (action.type) {
    case types.SET_CATEGORIES:
      return {...state, list: _.uniqBy([...state.list, ...action.payload],'id')}
    case types.CLEAR_CATEGORIES:
      return {...state, list: []}
    case types.PICK_CATEGORY:
      return {...state, category: action.payload}
    case types.CLEAR_CATEGORY:
      return {...state, category: null}
    default:
      return state;
  }
}
