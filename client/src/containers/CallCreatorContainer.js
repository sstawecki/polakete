import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import * as callActions from '../actions/call-actions';
import * as headerActions from '../actions/header-actions';

class CallCreatorContainer extends Component {

  componentWillMount() {
    const {actions} = this.props;
    actions.setPageTitle('CREATING CALL...');
    actions.getSession().then((s) => {
      this.props.history.push(`/call/${s.sessionId}`);
    });
  }

  render() {
    return (
      <div/>
    );
  }
}

function mapStateToProps(state, props) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, callActions, headerActions), dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CallCreatorContainer));