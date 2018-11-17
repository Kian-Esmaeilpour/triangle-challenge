import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './{{name_pc}}.scss';

class {{name_pc}} extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={`{{name_pc}} ${classes.root}`}>
        {{name_pc}}
      </div>
    );
  }
}

{{name_pc}}.propTypes = {
  classes: PropTypes.object,
};

export default {{name_pc}};
