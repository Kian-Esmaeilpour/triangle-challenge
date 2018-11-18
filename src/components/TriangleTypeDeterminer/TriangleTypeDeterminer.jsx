import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TriangleTypeDeterminer.scss';
import Form from '../Form';
import SideLengthInput from '../SideLengthInput';
import ErrorsCard from '../ErrorsCard';
import { setSideLength } from '../../actions/triangleActions';
import { getTriangleErrors, getTriangleType } from '../../selectors/triangleSelector';

class TriangleTypeDeterminer extends Component {

  render() {
    const {
      triangleSides,
      triangleErrors,
      onSideLengthChange
    } = this.props;

    return (
      <div className={`TriangleTypeDeterminer`}>
        <Form
          title="Triangle Type Determiner"
          onSubmit={onSideLengthChange}
        >
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
        <ErrorsCard errors={triangleErrors} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  triangleSides: state.triangle.triangleSides,
  triangleErrors: getTriangleErrors(state),
  triangleType: getTriangleType(state)
});

const mapDispatchToProps = dispatch => ({
  onSideLengthChange: id => event => dispatch(setSideLength(id, event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriangleTypeDeterminer);
