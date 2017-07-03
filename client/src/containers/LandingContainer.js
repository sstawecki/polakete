import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as headerActions from '../actions/header-actions';

class LandingContainer extends Component {

  componentWillMount() {
    this.props.actions.setPageTitle('WELCOME');
  }

  render() {
    return (
      <div className="content">
        <Link to="/call">New call</Link>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},headerActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);