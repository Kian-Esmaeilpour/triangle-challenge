import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import store from '../../store';
import { initialState } from '../../reducers/triangleReducer';
import TriangleCanvas from './TriangleCanvas';

it('TriangleCanvas renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TriangleCanvas
    triangleSides={initialState.triangleSides}
    store={store}
  />);
});
