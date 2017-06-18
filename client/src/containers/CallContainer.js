import React, {Component} from 'react';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as callActions from '../actions/call-actions';
import * as headerActions from '../actions/header-actions';

class CallContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      call: null
    };
  }

  componentWillMount() {
    this.props.actions.setPageTitle('Calls');
  }

  render() {
    return (
      <div>
        <h1>Video Call</h1>
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
    actions: bindActionCreators(Object.assign({},callActions,headerActions), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CallContainer);