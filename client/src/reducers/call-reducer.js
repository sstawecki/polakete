import * as types from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_SESSION:
      return Object.assign({}, state, {
        sessionId: action.sessionId
      });
    default:
      return state;
  }
};