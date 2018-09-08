import _ from 'lodash'
import * as types from '../_constants/Space'

export default function(
  state = {
    list: []
  },
  action
) {
  switch (action.type) {
    case types.SET_SPACES:
    return {...state, list: _.uniqBy([...state.list, ...action.payload],'category.id')}
    case types.CLEAR_SPACES:
        return {...state, list: []}
    default:
      return state;
  }
}
