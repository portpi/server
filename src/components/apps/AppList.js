import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, withStyles, CircularProgress, Grid } from '@material-ui/core';
import * as actions from '../../actions';
import AppItem from './AppItem';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit * 2
  }
});

class AppList extends Component {

  componentWillMount() {
    this.props.fetchApps();
  }

  render() {
    const { classes } = this.props;
    const { isLoading, list } = this.props.apps;

    if (isLoading) {
      return (
        <section className={classes.root}>
          <CircularProgress/>
        </section>
      );
    }

    if (!list || list.length === 0) {
      return (
        <section className={classes.root}>
          <Typography variant="body1">No apps available.</Typography>
        </section>
      );
    }

    return (
      <section className={classes.root}>
        <Grid container justify="center" spacing={32}>
          {list.map((app, index) => (
            <Grid item key={index}>
              <AppItem {...app}></AppItem>
            </Grid>
          ))}
        </Grid>
      </section>
    );
  }
}

const mapStateToProps = ({ apps }) => ({ apps });

export default connect(mapStateToProps, actions)(withStyles(styles)(AppList));
