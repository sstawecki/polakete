import * as types from './action-types';

export const getSession = (sessionId) => {
  return {
    type: types.GET_SESSION,
    sessionId
  };
};