import { setSideErrors } from '../actions/triangleActions';
import { SET_SIDE_LENGTH } from '../constants/actionTypes';
import { validateSide } from '../utils/triangleValidator';

const triangleValidationMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== SET_SIDE_LENGTH) {
    return next(action);
  }

  const { id } = action.payload;
  const sideErrors = validateSide(action.payload);
  dispatch(setSideErrors(id, sideErrors));
  next(action);
};

export default triangleValidationMiddleware;