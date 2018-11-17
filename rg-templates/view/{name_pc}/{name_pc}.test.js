import React from 'react';
import ReactDOM from 'react-dom';
import {{name_pc}} from './{{name_pc}}';

it('{{name_pc}} renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<{{name_pc}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
