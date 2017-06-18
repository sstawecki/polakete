import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.onHomeClick = this.onHomeClick.bind(this);
    this.toggleMenuOnEsc = this.toggleMenuOnEsc.bind(this);
  }

  onHomeClick() {
    this.props.toggle();
    this.props.push('/');
  }

  toggleMenuOnEsc(e,r) {
    switch (r) {
      case 'clickaway':
      case 'escape':
        this.props.toggle();
        break;
      default:
    }
  }

  render() {
    return (
      <Drawer
        open={this.props.isOpen}
        docked={false}
        onRequestChange={this.toggleMenuOnEsc}
      >
        <MenuItem onTouchTap={this.onHomeClick}>Home</MenuItem>
        <MenuItem onTouchTap={this.props.toggle}>Close</MenuItem>
      </Drawer>
    );
  }
};