import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import AppList from './components/apps/AppList';
import AppLoader from './components/apps/AppLoader';

const styles = theme => ({
  title: {
    paddingLeft: theme.spacing.unit * 2
  }
});

class App extends Component {
  render() {
    const app = this.props.apps && this.props.apps.currentApp;
    const { classes } = this.props;

    return (
      <section>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              PortPi
            </Typography>
            {app && <Typography className={classes.title} variant="title" color="inherit">{app.displayName}</Typography>}
          </Toolbar>
        </AppBar>
        {app ? <AppLoader app={app}/> : <AppList/>}
      </section>
    );
  }
}

const mapStateToProps = ({ apps }) => ({ apps });

export default connect(mapStateToProps)(withStyles(styles)(App));
