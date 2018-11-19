import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

it('Form renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form>test children</Form>, div);
  ReactDOM.unmountComponentAtNode(div);
});
