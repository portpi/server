import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import AppList from './components/apps/AppList';

const styles = theme => ({
});

class App extends Component {
  render() {
    return (
      <section>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              PortPi
            </Typography>
          </Toolbar>
        </AppBar>
        <AppList/>
      </section>
    );
  }
}

export default withStyles(styles)(App);
