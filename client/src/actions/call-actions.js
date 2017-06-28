import * as types from './action-types';

const createSessionReq = () => {
  return {
    type: types.CREATE_SESSION_REQ,
    isFetching: true
  }
};

const createSessionOk = (data) => {
  return {
    type: types.CREATE_SESSION_OK,
    isFetching: false,
    sessionId: data.session_id,
    token: data.token
  }
};

const createSessionErr = (error) => {
  return {
    type: types.CREATE_SESSION_ERR,
    isFetching: false,
    error
  }
};

export const createSession = () => {
  return dispatch => {
    dispatch(createSessionReq());
    return fetch('/api/session').then((req) => {
      console.log(req);
      return req.json().then((body) => {
        console.log(body);
        if (req.status !== 200) return dispatch(createSessionErr(body));
        return dispatch(createSessionOk(body));
      });
    });
  }
};