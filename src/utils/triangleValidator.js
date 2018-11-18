import errorTypes from '../constants/errorTypes';

const isSideLengthLessOrEqualZero = side => side.value <= 0;

// Sum of each two sides  should be greater than the third side
export const isInvalidTriangleSides = sides => {
  return (
    sides[0].value + sides[1].value <= sides[2].value ||
    sides[0].value + sides[2].value <= sides[1].value ||
    sides[1].value + sides[2].value <= sides[0].value
  );
};

export const validateTriangle = sides => {
  const errors = [];
  if (sides.some(isSideLengthLessOrEqualZero)) {
    errors.push(errorTypes.ZERO_OR_NEGATIVE_LENGTH);
  } else if (isInvalidTriangleSides) {
    errors.push(errorTypes.INVALID_TRIANGLE_SIDES);
  }
  //TODO: Check for provided sides length count
  return errors;
};

export const validateSide = side => {
  console.log('isSideLengthLessOrEqualZero(side)', isSideLengthLessOrEqualZero(side));
  return isSideLengthLessOrEqualZero(side) ? [errorTypes.ZERO_OR_NEGATIVE_LENGTH] : [];
};