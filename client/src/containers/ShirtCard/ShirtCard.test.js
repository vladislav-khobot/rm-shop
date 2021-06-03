import { render, cleanup } from '@testing-library/react';

import { ShirtCard } from 'containers/ShirtCard';

describe('Container "Shirt Card"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <ShirtCard {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('shirt-card');

    expect(node).toBeInTheDocument();
  });
});
