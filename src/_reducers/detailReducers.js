import detailConstants from '../_constants/detailConstants';

export default function(
  state = {
    detailFetched: false,
    product: {},
    variantSize: [],
    variantColor: []
  },
  action
) {
  switch (action.type) {
    case detailConstants.GET_DETAIL:
      return {
        ...state,
        product: action.payload,
        variantSize: action.payload.size,
        variantColor: action.payload.color,
        detailFetched: true
      };
    default:
      return state;
  }
}
