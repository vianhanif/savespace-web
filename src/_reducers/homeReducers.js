import _ from 'lodash';
import homeConstants from '../_constants/homeConstants';

export default function(
  state = {
    fetched: false,
    products: [],
    headlines: [],
    product: {}, // Chosen Product,
    relatedProduct: [],
    filteredProducts: [],
    searchedProducts: null,
    category: '',
    sortBy: '',
    isFetchPagination: false
  },
  action
) {
  switch (action.type) {
    case 'ERROR_FETCH':
      return {...state, fetched: false, error: true};
    case homeConstants.FETCHING:
      return {...state, fetched: false};
    case homeConstants.GET_HEADLINES:
      return {...state, headlines: action.payload.headlines}
    case homeConstants.FETCHING_PAGINATION:
      return {
        ...state,
        isFetchPagination: action.fetching
      };
    case homeConstants.GET_PRODUCT:
      return {
        ...state,
        products: _.uniqBy(
          [...state.products, ...action.payload.products].filter((x, y) => {
            return x.id !== y.id;
          }),
          'id'
        ),
        // .sort(
        //   (a, b) => {
        //     return b.sub_products.length - a.sub_products.length;
        //   }
        // ),
        fetched: true,
        category: '',
        sortBy: ''
      };
    case 'STORE_RELATED_PRODUCT':
      return {
        ...state,
        fetched: true,
        relatedProduct: _.uniqBy(
          [...state.relatedProduct, ...action.relatedProduct],
          'id'
        )
      };
    case homeConstants.GET_SORTED_PRODUCT:
      return {
        ...state,
        products: action.payload.products,
        fetched: true,
        category: '',
        sortBy: action.payload.sortKey
      };
    case homeConstants.GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: _.uniqBy(
          [...state.filteredProducts, ...action.payload.filteredProducts],
          'id'
        ),
        category: action.payload.category,
        fetched: true
      };
    case homeConstants.RESET_PRODUCTS:
      return {
        ...state,
        searchedProducts: null,
        products: [],
        filteredProducts: []
      };
    case homeConstants.SEARCH_PRODUCTS: {
      let list = state.searchedProducts ? state.searchedProducts : [];
      return {
        ...state,
        searchedProducts: _.uniqBy(
          [...list, ...action.payload.searchedProducts],
          'id'
        )
      };
    }
    case homeConstants.FAILED_GET_PRODUCT: {
      return {
        ...state,
        payload: action.payload
      };
    }
    default:
      return state;
  }
}
