import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import store from '../../store';
import App from './App';

it('App renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App store={store} />);
});
