import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

import './ErrorsCard.scss';

class ErrorsCard extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes, errors } = this.props;
    if (!errors || errors.length === 0) {
      return null;
    }

    return (
      <div className={`ErrorsCard ${classes.root}`}>
        <Paper
          className="errors-card-paper"
          square
        >
          <List>
            {
              errors.map(error => (
                <ListItem key={error}>
                  <ListItemIcon>
                    <ErrorIcon color="error" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="error">{error}</Typography>
                  </ListItemText>
                </ListItem>
              ))
            }
          </List>
        </Paper>
      </div>
    );
  }
}

ErrorsCard.propTypes = {
  classes: PropTypes.object
};

export default ErrorsCard;
