import axios from 'axios';
import * as types from '../_constants/Space'

export function getSpace() {
  return async dispatch => {
    // let response = await axios.get(JSON.stringify(require().default))
    let response = require('../_mocks/spaces.json')
    if (response.code === 'SUCCESS') {
        return dispatch({ type: types.SET_SPACES, payload: response.result })
    }
    return dispatch({ type: types.SET_SPACES, payload: [] })
  };
}
