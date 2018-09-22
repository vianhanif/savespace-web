import _ from 'lodash'
import * as types from '../_constants/Space'

export default function(
  state = {
    list: [],
    data: null,
    my_spaces: []
  },
  action
) {
  switch (action.type) {
    case types.SET_SPACES:
      return {...state, list: _.uniqBy([...state.list, ...action.payload],'category.id')}
    case types.CLEAR_SPACES:
      return {...state, list: []}
    case types.SET_SPACE:
      return {...state, data: action.payload}
    case types.CLEAR_SPACE:
      return {...state, data: null}
    case types.SET_MY_SPACES:
      return {...state, my_spaces: _.uniqBy([...state.my_spaces, ...action.payload],'id')}
    default:
      return state;
  }
}
