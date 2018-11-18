import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import './SideLengthInput.scss';

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
    const { classes, value, id, label, errors, onChange } = this.props;

    return (
      <div className={`SideLengthInput ${classes.root}`}>
        <TextField
          id={`side${id}`}
          label={label}
          value={value}
          onChange={onChange(id)}
          error={errors.length > 0}
          helperText={errors.join(', ')}
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

export default SideLengthInput;
