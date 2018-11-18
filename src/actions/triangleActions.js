import * as Actions from '../constants/actionTypes';

export function setSideLength(id, value) {
  return {
    type: Actions.SET_SIDE_LENGTH,
    payload: { id, value }
  };
}

export function setSideErrors(id, errors) {
  return {
    type: Actions.SET_SIDE_ERRORS,
    payload: { id, errors }
  };
}

export function setTriangleErrors(triangleErrors) {
  return {
    type: Actions.SET_TRIANGLE_ERRORS,
    payload: { triangleErrors }
  };
}