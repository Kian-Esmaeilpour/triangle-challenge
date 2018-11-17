import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TriangleTypeDeterminer.scss';

class TriangleTypeDeterminer extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={`TriangleTypeDeterminer ${classes.root}`}>
        TriangleTypeDeterminer
      </div>
    );
  }
}

TriangleTypeDeterminer.propTypes = {
  classes: PropTypes.object,
};

export default TriangleTypeDeterminer;
