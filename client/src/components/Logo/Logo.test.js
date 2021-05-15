import { render, cleanup } from '@testing-library/react';

import { Logo } from 'components/Logo';

describe('Component Logo', () => {

  afterEach(() => {
    cleanup();
  });

  test('Is render', () => {
    const { getByTestId } = render(
      <Logo />
    );

    const node = getByTestId('logo');

    expect(node).toBeInTheDocument();
  });
});
