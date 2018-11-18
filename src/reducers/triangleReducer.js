import * as Actions from '../constants/actionTypes';

const initialState = {
  triangleSides: [
    { id: 'sideA', value: '', errors: [] },
    { id: 'sideB', value: '', errors: [] },
    { id: 'sideC', value: '', errors: [] }
  ],
  triangleErrors: [],
  triangleType: null
};

export default function triangleReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_SIDE_LENGTH: {
      const { id, value } = action.payload;
      const triangleSides = state.triangleSides.map(side => side.id !== id ? side : { ...side, value });
      return { ...state, triangleSides };
    }
    case Actions.SET_SIDE_ERRORS: {
      const { id, errors } = action.payload;
      const triangleSides = state.triangleSides.map(side => side.id !== id ? side : { ...side, errors });
      return { ...state, triangleSides };
    }
    case Actions.SET_TRIANGLE_ERRORS: {
      const { triangleErrors } = action.payload;
      return { ...state, triangleErrors };
    }
    default:
      return state;
  }
}