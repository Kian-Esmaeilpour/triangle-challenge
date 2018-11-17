import React from 'react';
import ReactDOM from 'react-dom';
import TriangleTypeDeterminer from './TriangleTypeDeterminer';

it('TriangleTypeDeterminer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TriangleTypeDeterminer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
