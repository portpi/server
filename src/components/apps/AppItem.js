import React, { Component } from 'react';
import { Card, CardContent, withStyles, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

const styles = {
  root: {
    width: 160,
    height: 160
  }
};

class AppItem extends Component{
  state = {
    redirect: false
  };

  onAppSelect = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/${this.props.name}`} />;
    };

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

export default withStyles(styles)(AppItem);
