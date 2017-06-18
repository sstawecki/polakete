import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import * as headerActions from '../actions/header-actions';

class LandingContainer extends Component {

  componentWillMount() {
    this.props.actions.setPageTitle('Welcome');
  }

  render() {
    return (
      <div>
        Landing. <Link to="/call">Go to call</Link>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},headerActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);