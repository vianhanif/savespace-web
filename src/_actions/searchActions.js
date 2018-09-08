import searchConstants from '../_constants/searchConstants';

export function saveLastSearch(productName) {
  return async dispatch => {
    try {
      dispatch({
        type: searchConstants.SAVE_LAST_SEARCH,
        payload: productName
      });
    } catch (error) {
      console.error(error);
    }
  };
}
