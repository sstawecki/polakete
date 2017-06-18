import * as types from '../actions/action-types';

export default (state = {
  pageTitle: ''
}, action) => {
  switch (action.type) {
    case types.CHANGE_PAGE_TITLE:
      return Object.assign({}, state, {
        pageTitle: action.pageTitle
      });
    default:
      return state;
  }
};