import axios from 'axios';
import variableConstants from '../_constants/variableConstants';
import categoryConstants from '../_constants/categoryConstants';

export function getListCategory(history) {
  return async dispatch => {
    try {
      const res = await axios.get(
        `${variableConstants.URL}/customer/categories`
      );
      if (res.data.data.length > 0) {
        dispatch({
          type: categoryConstants.GET_LIST_CATEGORY,
          payload: res.data.data
        });
      }
    } catch (error) {
      console.error('error fetch');
    }
  };
}
