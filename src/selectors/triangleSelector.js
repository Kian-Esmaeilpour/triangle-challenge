import { createSelector } from 'reselect';

import { validateTriangle } from '../utils/triangleValidator';

const getTriangleSides = (state) => state.triangle.triangleSides;

export const getTriangleErrors = createSelector(
  [getTriangleSides],
  (triangleSides) => {
    const isFormDirty = triangleSides.every(side => side.dirty);
    return isFormDirty ? validateTriangle(triangleSides) : [];
  }
);

export const getTriangleType = createSelector(
  [getTriangleSides, getTriangleErrors],
  (triangleSides, triangleErrors) => {
    console.log('triangleSides, triangleErrors', triangleSides, triangleErrors);
  }
);