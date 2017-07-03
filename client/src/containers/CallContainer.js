import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {preloadScript, OTSession, OTPublisher, OTSubscriber, OTStreams} from 'opentok-react';
import * as callActions from '../actions/call-actions';
import * as headerActions from '../actions/header-actions';

class CallContainer extends Component {

  componentWillMount() {
    const {call} = this.props;
    this.props.actions.setPageTitle('CALL');

    if (!call.sessionId) {
      console.log('Empty session, fetching data...');
      console.log('requesting',this.props.match.params.id);
      this.props.actions.getSession(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.actions.clearSession();
  }

  renderCall() {
    const {call} = this.props;
    if (!call.sessionId) return;
    return(
      <OTSession apiKey="45896302" sessionId={call.sessionId} token={call.token}>
        <OTPublisher />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
    )
  }

  render() {

    return (
      <div>
        {this.renderCall()}
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

export default withRouter(preloadScript(connect(mapStateToProps, mapDispatchToProps)(CallContainer)));