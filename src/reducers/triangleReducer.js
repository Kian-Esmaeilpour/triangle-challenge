import * as Actions from '../constants/actionTypes';

const initialState = {
  triangleSides: [
    { id: 'sideA', value: '', errors: [], dirty: false },
    { id: 'sideB', value: '', errors: [], dirty: false },
    { id: 'sideC', value: '', errors: [], dirty: false }
  ]
};

export default function triangleReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SET_SIDE_LENGTH: {
      const { id, value } = action.payload;
      const triangleSides = state.triangleSides.map(side => side.id !== id ? side : { ...side, value, dirty: true });
      return { ...state, triangleSides };
    }
    case Actions.SET_SIDE_ERRORS: {
      const { id, errors } = action.payload;
      const triangleSides = state.triangleSides.map(side => side.id !== id ? side : { ...side, errors });
      return { ...state, triangleSides };
    }
    default:
      return state;
  }
}