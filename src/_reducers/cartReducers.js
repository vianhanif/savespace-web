import cartConstants from '../_constants/cartConstants';

export default function(
  state = {
    sessionId: '',
    countCart: [],
    listCart: '',
    itemAdded: false,
    isFetched: false
  },
  action
) {
  switch (action.type) {
    case cartConstants.ADD_TOCART:
      return {
        ...state,
        sessionId: action.payload,
        itemAdded: true
      };
    case cartConstants.COUNT_CART:
      return {
        ...state,
        countCart: action.payload.total,
        sessionId: action.payload.sessionId,
      };
    case cartConstants.DELETE_ITEM:
      return {
        ...state,
        listCart: action.payload.data,
        countCart: action.payload.data
      };
    case cartConstants.LIST_CART:
      return {
        ...state,
        listCart: action.payload.data,
        sessionId: action.payload.sessionId,
        itemAdded: action.payload.itemAdded,
        isFetched: true
      };
    case cartConstants.END_TRANSACTION:
      return {
        ...state,
        sessionId: '',
        countCart: [],
        listCart: []
      };
    case cartConstants.ITEM_ADDED:
      return {
        ...state,
        itemAdded: action.payload
      };
    case cartConstants.REMOVE_ITEM_ADDED:
      return {
        ...state,
        itemAdded: action.payload
      };
    default:
      return state;
  }
}
