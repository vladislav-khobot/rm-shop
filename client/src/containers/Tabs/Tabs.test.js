import { render, cleanup } from '@testing-library/react';

import { Tabs } from 'containers/Tabs';

describe('Container "Tabs"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Tabs {...props} />
    );
  };

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('tabs');

    expect(node).toBeInTheDocument();
  });
});
