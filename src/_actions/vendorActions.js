import axios from 'axios';
import variableConstants from '../_constants/variableConstants';
import vendorConstants from '../_constants/vendorConstants';

export const resetListVendorProducts = () => {
  return dispatch => {
    return dispatch({
      type: vendorConstants.RESET_VENDOR_PRODUCTS,
      payload: {}
    });
  };
};

export function getProductsByVendor(vendor, query, state = "default") {
  return dispatch =>
    axios
      .get(
        `${variableConstants.URL}/customer/vendors/${vendor}/products?page=${
          query.page
        }&per_page=${query.per_page}`
      )
      .then(products => {
        if (products.data.data.length !== 0) {
          return dispatch({
            type: vendorConstants.GET_PRODUCT_BY_VENDOR,
            payload: {
              products: products.data.data,
              vendor
            }
          });
        }
      })
      .catch(err => console.error(err.response.data.message));
}

export function getVendorDetail(vendor) {
  return dispatch => 
    axios
      .get(`${variableConstants.URL}/customer/vendors/${vendor}`)
      .then(response => {
        return dispatch({
          type: vendorConstants.GET_DETAIL_VENDOR,
          payload: response.data.data
        })
      })
      .catch(err => console.error(err.response.data.message));
}
