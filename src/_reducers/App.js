import * as types from '../_constants/App'

export default function(
  state = {
    title: 'Save Space'
  },
  action
) {
  switch (action.type) {
    case types.SET_TITLE:
        return {...state, title: action.payload}
    default:
      return state;
  }
}
