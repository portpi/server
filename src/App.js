import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import AppList from './components/apps/AppList';
import AppLoader from './components/apps/AppLoader';

const styles = theme => ({
  logo: {
    textDecoration: 'none',
    color: 'white'
  },
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
            <Link to="/" className={classes.logo}>
              <Typography variant="title" color="inherit">
                PortPi
              </Typography>
            </Link>
            {app && <Typography className={classes.title} variant="title" color="inherit">{app.displayName}</Typography>}
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/' component={AppList}/>
          <Route path='/:appName' component={AppLoader}/>
        </Switch>
      </section>
    );
  }
}

const mapStateToProps = ({ apps }) => ({ apps });

export default withRouter(connect(mapStateToProps)(withStyles(styles)(App)));
