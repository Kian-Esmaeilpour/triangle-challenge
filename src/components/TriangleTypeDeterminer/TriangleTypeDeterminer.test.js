import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TriangleTypeDeterminer, { mapStateToProps } from './TriangleTypeDeterminer';
import { initialState } from '../../reducers/triangleReducer';
import triangleTypes from '../../constants/triangleTypes';
import store from '../../store';

it('TriangleTypeDeterminer renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TriangleTypeDeterminer store={store} />);
});

it('maps the state to props correctly', () => {
  const appState = {
    triangle: initialState
  };
  const props = mapStateToProps(appState);
  const expectedInitialProps = {
    triangleSides: [
      { id: 'sideA', value: '', errors: [], dirty: false },
      { id: 'sideB', value: '', errors: [], dirty: false },
      { id: 'sideC', value: '', errors: [], dirty: false }
    ],
    triangleErrors: [],
    triangleType: undefined
  };
  expect(props).toMatchObject(expectedInitialProps);
});

it('maps form errors correctly', () => {
  const appState = {
    triangle: {
      triangleSides: [
        { id: 'sideA', value: '', errors: ['some_error'], dirty: true },
        { id: 'sideB', value: 5, errors: [], dirty: true },
        { id: 'sideC', value: -2, errors: ['some_error'], dirty: true }
      ]
    }
  };
  const props = mapStateToProps(appState);
  const expectedInitialProps = {
    triangleSides: [
      { id: 'sideA', value: '', errors: ['some_error'], dirty: true },
      { id: 'sideB', value: 5, errors: [], dirty: true },
      { id: 'sideC', value: -2, errors: ['some_error'], dirty: true }
    ],
    triangleErrors: [
      'FORM_EMPTY_LENGTH',
      'FORM_ZERO_OR_NEGATIVE_LENGTH'
    ],
    triangleType: undefined
  };
  expect(props).toMatchObject(expectedInitialProps);
});

it('maps triangle type correctly', () => {
  const appState = {
    triangle: {
      triangleSides: [
        { id: 'sideA', value: 5, errors: [], dirty: true },
        { id: 'sideB', value: 6, errors: [], dirty: true },
        { id: 'sideC', value: 7, errors: [], dirty: true }
      ]
    }
  };
  const props = mapStateToProps(appState);
  const expectedInitialProps = {
    triangleSides: [
      { id: 'sideA', value: 5, errors: [], dirty: true },
      { id: 'sideB', value: 6, errors: [], dirty: true },
      { id: 'sideC', value: 7, errors: [], dirty: true }
    ],
    triangleErrors: [],
    triangleType: triangleTypes.SCALENE
  };
  expect(props).toMatchObject(expectedInitialProps);
});
