import React from 'react';
import ReactDOM from 'react-dom';
import ErrorsCard from './ErrorsCard';

it('ErrorsCard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ErrorsCard/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
