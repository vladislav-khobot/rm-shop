import { render, cleanup } from '@testing-library/react';

import { ShirtCard } from 'containers/ShirtCard';

describe('Container "Shirt Card"', () => {
  afterEach(() => {
    cleanup();
  });

  test('Is render', () => {
    const { getByTestId } = render(
      <ShirtCard />
    );
    const node = getByTestId('shirt-card');

    expect(node).toBeInTheDocument();
  });
});
