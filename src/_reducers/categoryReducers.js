import categoryConstants from '../_constants/categoryConstants';

export default function(
  state = {
    fetched: false,
    listCategory: [],
    productsByCategory: ''
  },
  action
) {
  switch (action.type) {
    case categoryConstants.GET_LIST_CATEGORY:
      return {...state, listCategory: action.payload, fetched: true};
    case categoryConstants.FETCH_LIST_PRODUCT_BY_CATEGORY:
      return {...state, fetched: false};
    case categoryConstants.GET_LIST_PRODUCT_BY_CATEGORY:
      return {...state, productsByCategory: action.payload, fetched: true};
    default:
      return state;
  }
}
