import { setSideErrors, setTriangleErrors } from '../actions/triangleActions';
import { SET_SIDE_LENGTH } from '../constants/actionTypes';
import triangleValidator from '../utils/triangleValidator';

const triangleValidationMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== SET_SIDE_LENGTH) {
    return next(action);
  }

  const { id, value } = action.payload;
  const { triangleSides } = getState().triangle;
  console.log(getState());
  const sideErrors = triangleValidator.validateSide(action.payload);
  dispatch(setSideErrors(id, sideErrors));

  const newTriangleSides = triangleSides.map(side => side.id !== id ? side : { ...side, value });
  const triangleErrors = triangleValidator.validateTriangle(newTriangleSides);
  dispatch(setTriangleErrors(triangleErrors));

  next(action);
};

export default triangleValidationMiddleware;