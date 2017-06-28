import * as types from '../actions/action-types';

export default (state = {
  sessionId: null,
  token: null,
  isFetching: false,
  error: null
}, action) => {
  switch (action.type) {
    case types.CREATE_SESSION_REQ:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });
    case types.CREATE_SESSION_OK:
      return Object.assign({}, state, {
        sessionId: action.sessionId,
        token: action.token,
        isFetching: action.isFetching,
        error: null
      });
    case types.CREATE_SESSION_ERR:
      return Object.assign({}, state, {
        sessionId: null,
        token: null,
        isFetching: action.isFetching,
        error: action.error
      });
    default:
      return state;
  }
};