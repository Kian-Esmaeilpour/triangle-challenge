import errorTypes from '../constants/errorTypes';

const isSideLengthLessOrEqualZero = side => typeof side.value === 'number' ? side.value <= 0 : false;
const isSideLengthEmpty = side => side.value === '';

// Sum of each two sides must be greater than the third side
export const isInvalidTriangleSides = sides => {
  return (
    sides[0].value + sides[1].value <= sides[2].value ||
    sides[0].value + sides[2].value <= sides[1].value ||
    sides[1].value + sides[2].value <= sides[0].value
  );
};

export const validateTriangle = sides => {
  const errors = [];

  if (sides.some(isSideLengthEmpty)) {
    errors.push(errorTypes.FORM_EMPTY_LENGTH);
  }
  if (sides.some(isSideLengthLessOrEqualZero)) {
    errors.push(errorTypes.FORM_ZERO_OR_NEGATIVE_LENGTH);
  }
  if (errors.length === 0 && isInvalidTriangleSides(sides)) {
    errors.push(errorTypes.INVALID_TRIANGLE_SIDES);
  }
  return errors;
};

export const validateSide = side => {
  const errors = [];

  if (isSideLengthEmpty(side)) {
    errors.push(errorTypes.INPUT_EMPTY_LENGTH);
  } else if (isSideLengthLessOrEqualZero(side)) {
    errors.push(errorTypes.INPUT_ZERO_OR_NEGATIVE_LENGTH);
  }
  return errors;
};