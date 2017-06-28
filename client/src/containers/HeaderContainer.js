import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppBar from 'material-ui/AppBar';
import NavMenu from '../components/NavMenu';
import * as navMenuActions from '../actions/nav-menu-actions';

class HeaderContainer extends Component {
  render() {
    return (
      <AppBar
        className="header"
        showMenuIconButton={true}
        title={this.props.header.pageTitle}
        onLeftIconButtonTouchTap={this.props.actions.toggleNavMenu}
      >
        <NavMenu
          isOpen={this.props.navMenu.isOpen}
          toggle={this.props.actions.toggleNavMenu}
          push={this.props.history.push}
        />
      </AppBar>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    navMenu: state.navMenu,
    header: state.header
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(navMenuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
