import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, withStyles, Typography } from '@material-ui/core';
import * as actions from '../../actions';

const styles = {
  root: {
    width: 160,
    height: 160
  }
};

class AppItem extends Component{

  onAppSelect = () => {
    this.props.loadApp(this.props);
  };

  render() {
    return (
      <Card className={this.props.classes.root} onClick={this.onAppSelect}>
        <CardContent>
          <Typography variant="headline">
            {this.props.displayName}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default connect(null, actions)(withStyles(styles)(AppItem));
