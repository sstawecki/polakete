import * as types from './action-types';

const getSessionReq = () => {
  return {
    type: types.GET_SESSION_REQ,
    isFetching: true
  }
};

const getSessionOk = (data) => {
  return {
    type: types.GET_SESSION_OK,
    isFetching: false,
    sessionId: data.session_id,
    token: data.token
  }
};

const getSessionErr = (error) => {
  return {
    type: types.GET_SESSION_ERR,
    isFetching: false,
    error
  }
};

export const getSession = (id=false) => {
  return dispatch => {
    dispatch(getSessionReq());
    const path = id? `/api/session/${id}`:'/api/session';
    return fetch(path).then((req) => {
      return req.json().then((body) => {
        if (req.status !== 200) return dispatch(getSessionErr(body));
        return dispatch(getSessionOk(body));
      });
    });
  }
};

export const clearSession = () => {
  return dispatch => {
    return dispatch({
      type: types.CLEAR_SESSION
    });
  };
};