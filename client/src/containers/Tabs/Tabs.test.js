import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store/store';

import { Tabs } from 'containers/Tabs';

describe('Container "Tabs"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <Tabs {...props} />
        </BrowserRouter>
      </Provider>
    );
  };

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('tabs');

    expect(node).toBeInTheDocument();
  });
});
