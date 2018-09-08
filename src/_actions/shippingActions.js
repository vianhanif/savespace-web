/*eslint-disable*/
// TODO: handle console logging
// FIXME: this is not a good idea
import axios from 'axios';
import variableConstants from '../_constants/variableConstants';
import shippingConstants from '../_constants/shippingConstants';
import cartConstants from '../_constants/cartConstants';

// export function formCheck(email, phone) {
//   return async dispatch => {
//     try {
//       const res = await axios.get(`${variableConstants.URL}/costumer/order/get_user?`,)
//     }
//   }
// }

export function getListProvince(sessionId) {
  return async dispatch => {
    try {
      // count total item on session_id cart
      const res = await axios.get(
        `${variableConstants.URL}/common/locations/provinces`,
        {
          headers: {
            Session_Id: sessionId
          }
        }
      );

      dispatch({
        type: shippingConstants.GET_PROVINCE,
        payload: res.data.data
      });
    } catch (error) {
      console.error('failed fetch all province');
    }
  };
}

export function getListCity(provinceId) {
  return async dispatch => {
    try {
      const res = await axios.get(
        `${
          variableConstants.URL
        }/common/locations/cities?province_id=${provinceId}`
      );
      dispatch({
        type: shippingConstants.GET_CITY,
        payload: res.data.data
      });
    } catch (error) {
      console.error('failed fetch all city');
    }
  };
}

export function getListDistrict(cityId) {
  return async dispatch => {
    try {
      const res = await axios.get(
        `${variableConstants.URL}/common/locations/districts?city_id=${cityId}`
      );

      dispatch({
        type: shippingConstants.GET_DISTRICT,
        payload: res.data.data
      });
    } catch (error) {
      console.error('failed fetch all city');
    }
  };
}

export function addShippingDetail(addressData, history) {
  // console.log(addressData);
  return async dispatch => {
    try {
      dispatch({
        type: shippingConstants.ADD_SHIPPING_DETAIL,
        payload: addressData
      });
      localStorage.setItem('shippingDetail', JSON.stringify(addressData));
      history.push('/shipping/select-payment');
    } catch (error) {
      console.error('error add shipping address');
    }
  };
}

export function addShippingPayment(
  paymentData,
  listCart,
  shippingDetail,
  history
) {
  return async dispatch => {
    let sumWeight = 0;
    listCart.length > 0
      ? listCart.map((item, index) => {
          if (item.weight == 0) {
            sumWeight = sumWeight + 1;
          } else {
            sumWeight = sumWeight + item.weight;
          }
        })
      : history.push('/');

    try {
      const jneData = {
        origin: 22, // equal to Bandung
        destination: shippingDetail.district,
        weight: Math.ceil(sumWeight / 1000),
        type: 'reg'
      };
      const res = await axios.post(
        `${variableConstants.URL}/common/expedites/calculate_jne`,
        jneData
      );

      dispatch({
        type: shippingConstants.ADD_SHIPPING_PAYMENT,
        payload: {paymentData, shippingRate: res.data.data}
      });
      localStorage.setItem('paymentData', JSON.stringify(paymentData));
      localStorage.setItem('shippingRate', JSON.stringify(res.data.data));

      history.push('/shipping/review');
    } catch (error) {
      console.error('error fetch jne calculation');
    }
  };
}

export function calculateJNE(values) {
  return async dispatch => {
    try {
      const jneData = {
        origin: 22, // equal to Bandung
        destination: values.district,
        weight: 1,
        type: 'reg'
      };
      const res = await axios.post(
        `${variableConstants.URL}/common/expedites/calculate_jne`,
        jneData
      );
      return res.data;
      // console.log(res);
    } catch (error) {
      console.error('Error fetch ongkir');
    }
  };
}

export function processCheckOut(values, sessionId, history) {
  return async dispatch => {
    try {
      const res = await axios.post(
        `${variableConstants.URL}/customer/orders/checkout`,
        values,
        {
          headers: {
            'Content-Type': 'application/json',
            'Session-Id': sessionId
          }
        }
      );
      dispatch({
        type: shippingConstants.CHECKOUT,
        payload: res.data
      });
      localStorage.setItem('checkout', JSON.stringify(res.data));
      history.push('/checkout');
    } catch (error) {
      console.error('failed to checkout');
    }
  };
}

export function getShippingStatus(values) {
  return async dispatch => {
    try {
      dispatch({
        type: shippingConstants.REQUEST_SHIPPING_STATUS,
        payload: values
      });
      const res = await axios.post(
        `${variableConstants.URL}/customer/orders/waybill`,
        {no_resi: values}
      );
      // console.log(res.data);
      if (res.data.data !== null) {
        dispatch({
          type: shippingConstants.SUCCESS_SHIPPING_STATUS,
          payload: res.data
        });

        return res.data;
      } else {
        dispatch({
          type: shippingConstants.FAILED_SHIPPING_STATUS,
          payload: res.data
        });
        return res.data;
      }
    } catch (error) {
      console.error('failed to get shipping status');
    }
  };
}

export function endTransaction(history) {
  return async dispatch => {
    try {
      localStorage.removeItem(variableConstants.SessionId);
      localStorage.removeItem('shippingDetail');
      localStorage.removeItem('paymentData');
      localStorage.removeItem('shippingRate');
      localStorage.removeItem('checkout');

      dispatch({
        type: shippingConstants.END_TRANSACTION
      });
      dispatch({
        type: cartConstants.END_TRANSACTION
      });
      history.push('/');
    } catch (error) {
      console.error('error to end transaction');
    }
  };
}
