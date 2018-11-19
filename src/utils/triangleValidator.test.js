import errorTypes from '../constants/errorTypes';
import { validateTriangle, validateSide } from './triangleValidator';
import triangleTypes from '../constants/triangleTypes';

const triangleSides = [
  { id: 'sideA', value: 5, errors: [], dirty: true },
  { id: 'sideB', value: 6, errors: [], dirty: true },
  { id: 'sideC', value: 7, errors: [], dirty: true }
];

function getTriangleSides(lengthsArray) {
  return triangleSides.map((side, index) => ({ ...side, value: lengthsArray[index] }));
}

it('validate correct triangles', () => {
  expect(validateTriangle(getTriangleSides([4, 4, 4]))).toHaveLength(0);
  expect(validateTriangle(getTriangleSides([1, 3, 3]))).toHaveLength(0);
  expect(validateTriangle(getTriangleSides([4, 5, 3]))).toHaveLength(0);
  expect(validateTriangle(getTriangleSides([+10, +5, 8]))).toHaveLength(0);
  expect(validateTriangle(getTriangleSides([2000, 2000, 2000]))).toHaveLength(0);
});

it('validate invalid triangles', () => {
  expect(validateTriangle(getTriangleSides([10, 5, 5]))).toContain(errorTypes.INVALID_TRIANGLE_SIDES);
  expect(validateTriangle(getTriangleSides([1, 12, 2]))).toContain(errorTypes.INVALID_TRIANGLE_SIDES);
  expect(validateTriangle(getTriangleSides([0, 0, 0]))).toContain(errorTypes.FORM_ZERO_OR_NEGATIVE_LENGTH);
  expect(validateTriangle(getTriangleSides([-2, -1, 0]))).toContain(errorTypes.FORM_ZERO_OR_NEGATIVE_LENGTH);
  expect(validateTriangle(getTriangleSides([0, 2, 1]))).toContain(errorTypes.FORM_ZERO_OR_NEGATIVE_LENGTH);
  expect(validateTriangle(getTriangleSides(['', '', '']))).toContain(errorTypes.FORM_EMPTY_LENGTH);
  expect(validateTriangle(getTriangleSides([5, 5, '']))).toContain(errorTypes.FORM_EMPTY_LENGTH);
  expect(validateTriangle(getTriangleSides(['', 0, 1])))
    .toEqual(expect.arrayContaining([errorTypes.FORM_EMPTY_LENGTH, errorTypes.FORM_ZERO_OR_NEGATIVE_LENGTH]));
});

it('validate triangle side', () => {
  const triangleSideSamp1 = getTriangleSides(['', 0, 5]);
  const triangleSideSamp2 = getTriangleSides([+1, -5, 50000]);
  expect(validateSide(triangleSideSamp1[0])).toContain(errorTypes.INPUT_EMPTY_LENGTH);
  expect(validateSide(triangleSideSamp1[1])).toContain(errorTypes.INPUT_ZERO_OR_NEGATIVE_LENGTH);
  expect(validateSide(triangleSideSamp1[2])).toHaveLength(0);
  expect(validateSide(triangleSideSamp2[0])).toHaveLength(0);;
  expect(validateSide(triangleSideSamp2[1])).toContain(errorTypes.INPUT_ZERO_OR_NEGATIVE_LENGTH);
  expect(validateSide(triangleSideSamp2[2])).toHaveLength(0);
});

