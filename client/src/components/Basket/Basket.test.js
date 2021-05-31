import { render, cleanup } from '@testing-library/react';

import { Basket } from '.';

describe('Component "Basket"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Basket {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('basket');

    expect(node).toBeInTheDocument();
  });
});
