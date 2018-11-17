import React from 'react';
import ReactDOM from 'react-dom';
import SideLengthInput from './SideLengthInput';

it('SideLengthInput renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideLengthInput/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
