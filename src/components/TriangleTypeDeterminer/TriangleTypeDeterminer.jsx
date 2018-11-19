import React, { Component } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Grid, Typography } from '@material-ui/core';
import TriangleIcon from '@material-ui/icons/ChangeHistory';

import './TriangleTypeDeterminer.scss';
import Form from '../Form';
import SideLengthInput from '../SideLengthInput';
import ErrorsCard from '../ErrorsCard';
import { setSideLength } from '../../actions/triangleActions';
import { getTriangleErrors, getTriangleType } from '../../selectors/triangleSelector';
import TriangleTypes from '../../constants/triangleTypes';
import Messages from './TriangleTypeDeterminer.i18n';

class TriangleTypeDeterminer extends Component {

  render() {
    const {
      triangleSides,
      triangleErrors,
      triangleType,
      onSideLengthChange,
      intl: { formatMessage }
    } = this.props;

    const triangleErrorsWithMessage = triangleErrors.map(error => (
      { id: error, message: formatMessage(Messages[error.toLowerCase()]) }
    ));

    const triangleTypeName = formatMessage(
      Messages[triangleType ? triangleType.toLowerCase() : 'not_a_triangle']
    );

    const triangleTypeColors = {
      [TriangleTypes.SCALENE]: 'textPrimary',
      [TriangleTypes.ISOSCELES]: 'textSecondary',
      [TriangleTypes.EQUILATERAL]: 'primary'
    };
    const triangleTypeColor = triangleType ? triangleTypeColors[triangleType] : 'error';

    return (
      <div className={`TriangleTypeDeterminer`}>
        <Form>
          <Grid
            container
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <Typography variant="subtitle1">
                Triangle Type Determiner
              </Typography>
            </Grid>
            <Grid item>
              <TriangleIcon fontSize="large" />
            </Grid>
            <Grid item>
              <Typography
                variant="headline"
                color={triangleTypeColor}
              >
                {triangleTypeName}
              </Typography>
            </Grid>
          </Grid>
          {
            triangleSides.map(side => (
              <SideLengthInput
                key={side.id}
                label={side.id}
                id={side.id}
                value={side.value}
                errors={side.errors}
                onChange={onSideLengthChange}
              />
            ))
          }
        </Form>
        <ErrorsCard errors={triangleErrorsWithMessage} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  triangleSides: state.triangle.triangleSides,
  triangleErrors: getTriangleErrors(state),
  triangleType: getTriangleType(state)
});

const mapDispatchToProps = dispatch => ({
  onSideLengthChange: id => event => {
    const value = event.target.value ? Number(event.target.value) : '';
    return dispatch(setSideLength(id, value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TriangleTypeDeterminer));
