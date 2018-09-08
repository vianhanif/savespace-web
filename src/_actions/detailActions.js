import axios from 'axios';
import variableConstants from '../_constants/variableConstants';
import detailConstants from '../_constants/detailConstants';

export function getDetailProduct(id, history) {
  return async dispatch => {
    try {
      const res = await axios.get(`${variableConstants.URL}/customer/products/${id}`);
      if (res.data.data) {
        dispatch({
          type: detailConstants.GET_DETAIL,
          payload: res.data.data
        });
      }
    } catch (error) {
      console.error('error fetch');
    }
  };
}
