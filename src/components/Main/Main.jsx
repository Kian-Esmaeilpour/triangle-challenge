import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Main.scss';

class Main extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={`Main ${classes.root}`}>
        Main
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object,
};

export default Main;
