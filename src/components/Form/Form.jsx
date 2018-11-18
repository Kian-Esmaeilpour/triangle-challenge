import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardActions, CardContent, Button } from '@material-ui/core';

import './Form.scss';

class Form extends Component {
  static defaultProps = {
    classes: {},
    title: '',
    submitButtonText: 'Submit'
  };

  render() {
    const {
      classes,
      children,
      title,
      submitButtonText,
      onSubmit
    } = this.props;

    return (
      <form
        className={`Form ${classes.root}`}
        noValidate
        autoComplete="off"
      >
        <Card className={classes.card}>
          {title && <CardHeader title={title} />}
          <CardContent>
            {children}
          </CardContent>
          <CardActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={onSubmit}
            >
              {submitButtonText}
            </Button>
          </CardActions>
        </Card>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  submitButtonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
