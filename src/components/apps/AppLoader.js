import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import $script from 'scriptjs';

const styles = {
};

class AppLoader extends Component{
  state = {
    component: null,
    error: null
  };

  componentDidMount() {
    // expose React for UMD build
    window.React = React;
    window.PropTypes = PropTypes;
    // async load of remote UMD component
    $script(`/app/${this.props.app.name}/${this.props.app.info.main}`, () => {
      let target = window[this.props.app.name];
      if (target) {
        // loaded OK
        this.setState({
          error: null,
          component: target
        });
      } else {
        // loaded fail
        this.setState({
          error: `Cannot load app: ${this.props.app.name}`,
          component: null
        });
      }
    });
  }

  render() {
    if (this.state.component) {
      return <this.state.component />
    } else if (this.state.error) {
      return <p>{ this.state.error }</p>
    } else {
      return <Typography variant="body1">Loading...</Typography>
    }
  }
}

export default withStyles(styles)(AppLoader);
