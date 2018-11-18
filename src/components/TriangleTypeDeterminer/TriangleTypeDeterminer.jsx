import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './TriangleTypeDeterminer.scss';
import Form from '../Form';
import SideLengthInput from '../SideLengthInput';
import { setSideLength } from '../../actions/triangleActions';

class TriangleTypeDeterminer extends Component {
  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes, triangleSides, onSideLengthChange } = this.props;

    return (
      <div className={`TriangleTypeDeterminer ${classes.root}`}>
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
                onChange={onSideLengthChange}
                value={side.value}
              />
            ))
          }
        </Form>
      </div>
    );
  }
}

TriangleTypeDeterminer.propTypes = {
  classes: PropTypes.object
};

const mapStateToProps = state => ({
  triangleSides: state.triangle.triangleSides
});

const mapDispatchToProps = dispatch => ({
  onSideLengthChange: id => event => dispatch(setSideLength(id, event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriangleTypeDeterminer);
