import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from 'store/store';

import { Colors } from './Colors';

describe('Component "Colors"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Provider store={store}>
        <Colors {...props} />
      </Provider>
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('colors');

    expect(node).toBeInTheDocument();
  });
});
