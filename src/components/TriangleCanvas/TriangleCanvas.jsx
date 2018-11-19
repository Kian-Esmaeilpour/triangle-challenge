import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';

import './TriangleCanvas.scss';


function fitToContainer(canvas) {
  // Make it visually fill the positioned parent
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  // ...then set the internal size to match
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

class TriangleCanvas extends Component {
  static defaultProps = {
    classes: {}
  };

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    fitToContainer(this.refs.canvas);
    const ctx = this.refs.canvas.getContext('2d');
    const { triangleSides } = this.props;
    const AB = triangleSides[0].value;
    const BC = triangleSides[1].value;
    const AC = triangleSides[2].value;

    const A = [0, 0]; // starting coordinates
    const B = [0, AB];
    const C = [];

    // calculate third point
    C[1] = (AB * AB + AC * AC - BC * BC) / (2 * AB);
    C[0] = Math.sqrt(AC * AC - C[1] * C[1]);

    ctx.clearRect(0, 0, 300, 300);

    ctx.beginPath();
    ctx.moveTo(A[0], A[1]);
    ctx.lineTo(B[0], B[1]);
    ctx.lineTo(C[0], C[1]);
    ctx.fill();
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={`TriangleCanvas ${classes.root}`}>
        <Card>
          <CardContent>
            <canvas
              ref="canvas"
              width={300}
              height={300}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

TriangleCanvas.propTypes = {
  classes: PropTypes.object,
  triangleSides: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default TriangleCanvas;
