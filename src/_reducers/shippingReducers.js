import shippingConstants from '../_constants/shippingConstants';

export default function(
  state = {
    shippingDetail: {},
    paymentData: {},
    shippingRate: [],
    checkout: null,
    allProvinces: [],
    allCity: [],
    allDistrict: [],
    shippingStatus: null
  },
  action
) {
  switch (action.type) {
    case shippingConstants.ADD_SHIPPING_DETAIL:
      return {
        ...state,
        shippingDetail: action.payload
      };
    case shippingConstants.ADD_SHIPPING_PAYMENT:
      return {
        ...state,
        paymentData: action.payload.paymentData,
        shippingRate: action.payload.shippingRate
      };
    case shippingConstants.CHECKOUT:
      return {
        ...state,
        checkout: action.payload
      };
    case shippingConstants.GET_PROVINCE:
      return {
        ...state,
        allProvinces: action.payload
      };
    case shippingConstants.GET_CITY:
      return {
        ...state,
        allCity: action.payload
      };
    case shippingConstants.GET_DISTRICT:
      return {
        ...state,
        allDistrict: action.payload
      };
    case shippingConstants.END_TRANSACTION:
      return {
        ...state,
        shippingDetail: {},
        paymentData: {},
        shippingRate: [],
        checkout: null,
        allProvinces: [],
        allCity: [],
        allDistrict: []
      };
    case shippingConstants.REQUEST_SHIPPING_STATUS:
      return {
        ...state
      };
    case shippingConstants.SUCCESS_SHIPPING_STATUS:
      return {
        ...state,
        shippingStatus: action.payload
      };
    case shippingConstants.FAILED_SHIPPING_STATUS:
      return {
        ...state,
        shippingStatus: action.payload
      };
    default:
      return state;
  }
}
