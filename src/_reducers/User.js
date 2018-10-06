import * as types from '../_constants/User'

export default function(
  state = {
    data: null
  },
  action
) {
  switch (action.type) {
    case types.SET_USER:
        return {...state, data: action.payload}
    default:
      return state
  }
}
