import axios from 'axios';
import variableConstants from '../_constants/variableConstants';
import homeConstants from '../_constants/homeConstants';

export function fetching() {
  // console.log('fetching..')
  return dispatch =>
    dispatch({
      type: homeConstants.FETCHING
    });
}

export function getHeadlines() {
  return async dispatch => {
    try {
      const res = await axios.get(
        `${variableConstants.URL}/customer/headlines/`
      );
      if (res.data.data.length > 0) {
        dispatch({
          type: homeConstants.GET_HEADLINES,
          payload: {
            headlines: res.data.data
          }
        })
      }
    } catch (error) {
      console.error('error fetch');
    }
  }
}

export function getAllProducts(history) {
  return async dispatch => {
    try {
      const res = await axios.get(
        `${variableConstants.URL}/customer/products/`
      );
      if (res.data.data.length > 0) {
        dispatch({
          type: homeConstants.GET_PRODUCT,
          payload: {
            products: res.data.data
          }
        });
      }
    } catch (error) {
      console.error('error fetch');
    }
  };
}

export const resetListProducts = () => {
  return dispatch => {
    return dispatch({
      type: homeConstants.RESET_PRODUCTS,
      payload: {}
    });
  };
};

export const getProducts = query => {
  return dispatch => {
    dispatch({
      type: homeConstants.FETCHING_PAGINATION,
      fetching: true
    });
    return axios
    .get(
      `${variableConstants.URL}/customer/products/sort?filter=${
        query.sortKey
      }&page=${query.page}&per_page=${query.per_page}`
    )
    .then(products => {
      if (products.data.data.length !== 0) {
        dispatch({
          type: homeConstants.GET_PRODUCT,
          payload: {
            products: products.data.data
          }
        });
        return dispatch({
          type: homeConstants.FETCHING_PAGINATION,
          fetching: false
        });
      } else {
        return dispatch({
          type: homeConstants.FAILED_GET_PRODUCT,
          payload: null
        });
      }
    })
    .catch(err => console.error(err.response.data.message));
  }
};

export const fetchPagination = values => {
  return dispatch => {
    dispatch({
      type: homeConstants.FETCHING_PAGINATION,
      payload: values
    });
  };
};

export const searchProducts = (search, query) => {
  return dispatch =>
    axios
      .get(
        `${
          variableConstants.URL
        }/customer/search?query=${search}&per_page=${
          query.per_page
        }&page=${query.page}`
      )
      .then(response => {
        if (response.data.data.length !== 0) {
          return dispatch({
            type: homeConstants.SEARCH_PRODUCTS,
            payload: {
              searchedProducts: response.data.data
            }
          });
        }
      });
};

export function getSortedProducts(sortKey) {
  //TODO: implement pagination
  return dispatch =>
    axios
      .get(
        `${
          variableConstants.URL
        }/customer/products/sort?filter=${sortKey}&per_page=20&page=1`
      )
      .then(products => {
        if (products.data.data.length !== 0) {
          return dispatch({
            type: homeConstants.GET_SORTED_PRODUCT,
            payload: {
              products: products.data.data,
              sortKey
            }
          });
        }
      })
      .catch(err => console.error(err.response.data.message));
}

export function storeSelectedProduct(relatedProduct) {
  return dispatch => ({
    type: 'STORE_RELATED_PRODUCT',
    relatedProduct,
  });
}

export function getProductsByCategory(category, query, state = "default") {
  return dispatch =>
    axios
      .get(
        `${variableConstants.URL}/customer/products/category/${category}?page=${
          query.page
        }&per_page=${query.per_page}`
      )
      .then(products => {
        const filteredProducts = products.data.data.filter(product => {
          if (query.id) {
            if (product.id !== query.id) {
              return product
            }
            return product
          }
          return product
        });
        if (products.data.data.length !== 0) {
          if(state !== "default") {
            return dispatch({
              type: 'STORE_RELATED_PRODUCT',
              relatedProduct: filteredProducts
            });
          }
          return dispatch({
            type: homeConstants.GET_PRODUCT_BY_CATEGORY,
            payload: {
              filteredProducts,
              category
            }
          });
        }
      })
      .catch(err => console.error(err.response.data.message));
}
