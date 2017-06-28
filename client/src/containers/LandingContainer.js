import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as headerActions from '../actions/header-actions';
import * as callActions from '../actions/call-actions';

class LandingContainer extends Component {

  componentWillMount() {
    this.props.actions.setPageTitle('Welcome');
  }

  render() {
    return (
      <div className="content">
        <RaisedButton label="Create" primary={true} onClick={this.props.actions.createSession}  />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    call: state.call
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({},headerActions, callActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);