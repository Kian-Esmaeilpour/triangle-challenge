import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { injectIntl } from 'react-intl';

import './SideLengthInput.scss';
import Messages from './SideLengthInput.i18n';

class SideLengthInput extends Component {
  static propTypes = {
    classes: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    classes: {},
    value: ''
  };

  render() {
    const {
      classes,
      value,
      id,
      label,
      errors,
      onChange,
      intl: { formatMessage }
    } = this.props;

    const errorMessage = errors.map(error => formatMessage(Messages[error.toLowerCase()])).join(', ');

    return (
      <div className={`SideLengthInput ${classes.root}`}>
        <TextField
          id={`side${id}`}
          label={label}
          value={value}
          onChange={onChange(id)}
          error={errors.length > 0}
          helperText={errorMessage}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
    );
  }
}

export default injectIntl(SideLengthInput);
