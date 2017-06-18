import * as types from './action-types';

export const setPageTitle = (pageTitle) => {
  return {
    type: types.CHANGE_PAGE_TITLE,
    pageTitle: pageTitle
  };
};