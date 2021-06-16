import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store/store';

import { ShirtCard } from 'containers/ShirtCard';

describe('Container "Shirt Card"', () => {
  afterEach(() => {
    cleanup();
  });

  test('Is render', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ShirtCard />
      </Provider>
    );
    const node = getByTestId('shirt-card');

    expect(node).toBeInTheDocument();
  });
});
