// @flow
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import './index.css';
import HeaderContainer from './containers/HeaderContainer';
import Footer from './components/Footer';
import Routes from './Routes';
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="wrapper">
          <div className="content">
            <Route path={'/'} component={HeaderContainer}/>
            <Routes path={'/'} component={Routes}/>
          </div>
          <Route path={'/'} component={Footer}/>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);