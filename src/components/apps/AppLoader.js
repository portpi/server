import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as MaterialUICore from '@material-ui/core';
import * as MaterialUIIcons from '@material-ui/icons';
import * as actions from '../../actions';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2
  }
});

const packages = {
  'react': React,
  'prop-types': PropTypes,
  '@material-ui/core': MaterialUICore,
  '@material-ui/icons': MaterialUIIcons
};

class AppLoader extends Component{
  componentDidMount() {
    const appName = this.props.match.params.appName;
    const requireFunction = (name) => {
      if (packages[name]) {
        return packages[name];
      }

      // for @material-ui/core/List or @material-ui/icons/Folder
      if (name.indexOf('@material-ui') === 0) {
        const moduleName = name.split('/').pop();

        if (name.indexOf('@material-ui/core') === 0) {
          return MaterialUICore[moduleName];
        } else if (name.indexOf('@material-ui/icons') === 0) {
          return MaterialUIIcons[moduleName];
        }
      }

      console.error(`Unsupported package for AppLoader: ${name}`);
    };
    
    this.props.loadApp(appName, requireFunction);
  }

  render() {
    const { classes, apps } = this.props;

    if (apps.error) {
      return (
        <section className={classes.root}>
          <MaterialUICore.Typography variant="body1">{apps.error}</MaterialUICore.Typography>
        </section>
      );
    }

    if (apps.currentApp && apps.currentApp.component) {
      return <apps.currentApp.component/>;
    }

    return (
      <section className={classes.root}>
        <MaterialUICore.CircularProgress/>
      </section>
    );
  }
}

const mapStateToProps = ({ apps }) => ({ apps });

export default connect(mapStateToProps, actions)(MaterialUICore.withStyles(styles)(AppLoader));
