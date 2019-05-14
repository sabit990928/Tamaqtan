import { FETCH_USER, LOGOUT_USER } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER: 
      return action.payload || null;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}