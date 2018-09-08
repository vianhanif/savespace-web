import * as types from '../_constants/Space'

export default function(
  state = {
    list: []
  },
  action
) {
  switch (action.type) {
    case types.SET_SPACES:
      return {...state, list: [...state.list, ...action.payload]}
    case types.CLEAR_SPACES:
        return {...state, list: []}
    default:
      return state;
  }
}
