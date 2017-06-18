import * as types from '../actions/action-types';

export default (state = {
  isOpen: false
}, action) => {
  switch (action.type) {
    case types.TOGGLE_NAV_MENU:
      return Object.assign({}, state, {
        isOpen: !state.isOpen
      });
    default:
      return state;
  }
};