import axios from 'axios';
import variableConstants from '../_constants/Variable';
import cartConstants from '../_constants/cartConstants';

export function addItemToCart(productData, history) {
  return async dispatch => {
    try {
      let sessionId = localStorage.getItem(variableConstants.SessionId);
      if (sessionId) {
        // post new item with existing session_id cart
        const res = await axios.post(
          `${variableConstants.URL}/customer/carts/`,
          productData,
          {
            headers: {
              Session_Id: sessionId
            }
          }
        );
        if (res.data.session_id) {
          dispatch({
            type: cartConstants.ADD_TOCART,
            payload: res.data.session_id
          });
          dispatch({
            type: cartConstants.ITEM_ADDED,
            payload: true
          });
          dispatch(getCountListCart());
        }
        // history.push('/');
      } else {
        // post new item without session_id cart
        const res = await axios.post(
          `${variableConstants.URL}/customer/carts/`,
          productData
        );
        if (res.data.session_id) {
          localStorage.setItem(
            variableConstants.SessionId,
            res.data.session_id
          );
          dispatch({
            type: cartConstants.ADD_TOCART,
            payload: res.data.session_id
          });
          dispatch(getCountListCart());
        }
        // history.push('/');
      }
    } catch (error) {
      console.error('error add to cart');
    }
  };
}

export function getCountListCart() {
  return async dispatch => {
    let allPayload = {
      sessionId: '',
      data: '',
      total: 0
    };
    try {
      let sessionId = localStorage.getItem(variableConstants.SessionId);
      if (sessionId) {
        // count total item on session_id cart
        const res = await axios.get(`${variableConstants.URL}/customer/carts`, {
          headers: {
            Session_Id: sessionId
          }
        });

        allPayload = {
          sessionId: sessionId,
          data: res.data.data,
          total: res.data.total
        };

        dispatch({
          type: cartConstants.COUNT_CART,
          payload: allPayload
        });
      }
    } catch (error) {
      dispatch({
        type: cartConstants.COUNT_CART,
        payload: allPayload
      });
      console.error('error fetch list cart based on session id');
    }
  };
}
export function getListCart(history) {
  let allPayload = {
    sessionId: '',
    data: [],
    itemAdded: false,
    isFetched: false
  };
  return async dispatch => {
    try {
      let sessionId = localStorage.getItem(variableConstants.SessionId);
      // get all item in cart based on session_id cart

      if (sessionId) {
        const res = await axios.get(`${variableConstants.URL}/customer/carts`, {
          headers: {
            Session_Id: sessionId
          }
        });
        allPayload = {
          sessionId: sessionId,
          data: res.data.data,
          itemAdded: true,
          isFetched: true
        };
        dispatch({
          type: cartConstants.LIST_CART,
          payload: allPayload
        });
      } else {
        dispatch({
          type: cartConstants.LIST_CART,
          payload: allPayload
        });
      }
    } catch (error) {
      dispatch({
        type: cartConstants.LIST_CART,
        payload: allPayload
      });
      console.error('error fetch list cart');
    }
  };
}

export function deleteItemCart({id, index}, history, listCart) {
  return async dispatch => {
    try {
      let sessionId = localStorage.getItem(variableConstants.SessionId);

      // get all item in cart based on session_id cart
      if (sessionId) {
        const res = await axios.delete(
          `${variableConstants.URL + '/customer/carts/remove/' + id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Session-Id': sessionId
            }
          }
        );
        if (res) {
          dispatch({
            type: cartConstants.DELETE_ITEM,
            payload: res.data
          });
        } else {
          dispatch({
            type: cartConstants.END_TRANSACTION
          });
        }
      } else {
        history.push('/');
      }
    } catch (error) {
      console.error('error delete');
    }
  };
}

export function removeItemAdded(status) {
  return async dispatch => {
    try {
      if (status) {
        dispatch({
          type: cartConstants.REMOVE_ITEM_ADDED,
          payload: false
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
}
