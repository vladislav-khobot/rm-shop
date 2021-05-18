import { render, cleanup, fireEvent } from '@testing-library/react';

import { Size } from './Size';

describe('Component "Size"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Size {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('size');

    expect(node).toBeInTheDocument();
  });

  test('Transmitted active', () => {
    const { getByTestId } = setup({ active: true });
    const node = getByTestId('size');

    expect(node).toHaveClass('active');
  });

  test('Event reaction "onClick"', () => {
    const onClick = jest.fn();

    const { getByTestId } = setup({ onClick });
    const node = getByTestId('size');

    fireEvent.click(node);
    expect(onClick).toHaveBeenCalled();
  });
});
