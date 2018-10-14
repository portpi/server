import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as MaterialUICore from '@material-ui/core';
import * as MaterialUIIcons from '@material-ui/icons';
import $script from 'scriptjs';

const styles = {
};

const packages = {
  'react': React,
  'prop-types': PropTypes,
  '@material-ui/core': MaterialUICore,
  '@material-ui/icons': MaterialUIIcons
};

class AppLoader extends Component{
  state = {
    component: null,
    error: null
  };

  componentDidMount() {
    // prepare required peer dependencies
    window.require = (name) => packages[name] || console.error(`Unsupported package for AppLoader: ${name}`);
    window.module = {};

    // async load of remote cjs component
    $script(`/app/${this.props.app.name}/${this.props.app.info.main}`, () => {
      const target = window.module.exports;
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
      return <this.state.component text="test test!" />
    } else if (this.state.error) {
      return <p>{ this.state.error }</p>
    } else {
      return <MaterialUICore.Typography variant="body1">Loading...</MaterialUICore.Typography>
    }
  }
}

export default MaterialUICore.withStyles(styles)(AppLoader);
