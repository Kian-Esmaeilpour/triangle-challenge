import { createSelector } from 'reselect';

import { validateTriangle } from '../utils/triangleValidator';
import TriangleTypes from '../constants/triangleTypes';

const getTriangleSides = state => state.triangle.triangleSides;

export const isTriangleFormDirty = createSelector(
  [getTriangleSides],
  triangleSides => triangleSides.every(side => side.dirty)
);

export const getTriangleErrors = createSelector(
  [getTriangleSides, isTriangleFormDirty],
  (triangleSides, isTriangleFormDirty) => {
    return isTriangleFormDirty ? validateTriangle(triangleSides) : [];
  }
);

export const getTriangleType = createSelector(
  [getTriangleSides, getTriangleErrors, isTriangleFormDirty],
  (triangleSides, triangleErrors, isTriangleFormDirty) => {
    if (isTriangleFormDirty && triangleErrors.length === 0) {
      const sidesLengths = triangleSides.map(side => side.value);
      const uniqueSidesLengthsCount = new Set(sidesLengths).size;
      const triangleTypeByUniqueSidesLengthsCount = {
        // All three sides are equal
        1: TriangleTypes.EQUILATERAL,
        // Two sides are equal
        2: TriangleTypes.ISOSCELES,
        // Each side have different length
        3: TriangleTypes.SCALENE
      };
      return triangleTypeByUniqueSidesLengthsCount[uniqueSidesLengthsCount];
    }
  }
);