import { render, cleanup } from '@testing-library/react';

import { User } from '.';

describe('Component "User"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <User {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('user');

    expect(node).toBeInTheDocument();
  });
});
