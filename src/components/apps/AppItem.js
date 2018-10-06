import React, { Component } from 'react';
import { Card, CardContent, withStyles, Typography } from '@material-ui/core';

const styles = {
  root: {
    width: 160,
    height: 160
  }
};

class AppItem extends Component{
  render() {
    return (
      <Card className={this.props.classes.root}>
        <CardContent>
          <Typography variant="headline">
            {this.props.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(AppItem);
