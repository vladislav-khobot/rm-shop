import { render, cleanup } from '@testing-library/react';

import { Colors } from './Colors';

describe('Component "Colors"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Colors {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('colors');

    expect(node).toBeInTheDocument();
  });
});
