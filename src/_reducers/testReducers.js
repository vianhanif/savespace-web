export default function(
  state = {
    test: false
  },
  action
) {
  switch (action.type) {
    case 'TEST':
      return {...state, test: true};
    default:
      return state;
  }
}
