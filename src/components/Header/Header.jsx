import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={`Header ${classes.root}`}>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
};

export default Header;
