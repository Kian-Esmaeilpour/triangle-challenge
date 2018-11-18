import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import './Main.scss';

class Main extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes, children } = this.props;

    return (
      <Grid
        className={`Main ${classes.root}`}
        container
        alignItems="center"
        justify="center"
      >
        {children}
      </Grid>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object
};

export default Main;
