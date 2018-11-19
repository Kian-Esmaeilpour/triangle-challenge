import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { IntlProvider } from 'react-intl';

import store from '../../store';
import SideLengthInput from './SideLengthInput';


it('SideLengthInput renders without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <IntlProvider>
      <SideLengthInput store={store} />
    </IntlProvider>
  );
});
