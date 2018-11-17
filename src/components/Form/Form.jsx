import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

class Form extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={`Form ${classes.root}`}>
        Form
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object,
};

export default Form;
