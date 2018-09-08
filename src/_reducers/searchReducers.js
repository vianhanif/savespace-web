import searchConstants from '../_constants/searchConstants';

export default function(
  state = {
    lastSearch: []
  },
  action
) {
  switch (action.type) {
    case searchConstants.SAVE_LAST_SEARCH:
      return {
        ...state,
        lastSearch: [...state.lastSearch, action.payload]
      };
    default:
      return state;
  }
}
