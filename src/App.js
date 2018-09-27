import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  },
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
        <section className={this.props.classes.container}>
          <Typography variant="body1">No apps available.</Typography>
        </section>
      </section>
    );
  }
}

export default withStyles(styles)(App);
