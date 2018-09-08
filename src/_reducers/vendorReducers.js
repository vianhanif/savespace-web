import vendorConstants from '../_constants/vendorConstants';

export default function(
  state = {
    fetched: false,
    listProducts: [],
    productsByVendor: '',
    vendor: null
  },
  action
) {
  switch (action.type) {
    case vendorConstants.FETCH_LIST_PRODUCT_BY_VENDOR:
      return {...state, fetched: false};
    case vendorConstants.GET_PRODUCT_BY_VENDOR:
      console.log(action)
      return {...state, productsByVendor: action.payload.vendor, listProducts: action.payload.products, fetched: true};
    case vendorConstants.RESET_VENDOR_PRODUCTS:
      return {...state, listProducts: [], productsByVendor: '', vendor: null}
    case vendorConstants.GET_DETAIL_VENDOR:
      return {...state, vendor: action.payload}
    default:
      return state;
  }
}
