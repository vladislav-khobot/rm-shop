import { render, cleanup } from '@testing-library/react';

import { Sizes } from './Sizes';

describe('Component "Sizes"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Sizes {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('sizes');

    expect(node).toBeInTheDocument();
  });
});
