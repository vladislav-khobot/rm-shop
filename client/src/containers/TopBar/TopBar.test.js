import { render, cleanup } from '@testing-library/react';
import { TopBar } from '.';

describe('Container "Top Bar"', () => {
  afterEach(() => {
    cleanup();
  });

  test('Is render', () => {
    const { getByTestId } = render (
      <TopBar />
    );
    const node = getByTestId('topbar');

    expect(node).toBeInTheDocument();
  });
});
