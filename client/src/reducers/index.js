import call from './call-reducer';
import navMenu from './nav-menu-reducer';
import header from './header-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  call,
  navMenu,
  header
});

export default rootReducer;