import { cleanup, fireEvent, render } from '@testing-library/react';

import { Circle } from './Circle';

import { THEME } from 'constants/theme';

describe('Component Circle', () => {
  afterEach(() => {
    cleanup();
  });

  const colorWhite = THEME.colors.mainWhite;

  const setup = (props = {}) => {
    return render(
      <Circle {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId(`circle`);

    expect(node).toBeInTheDocument();
  });

  test('Transmitted color', () => {
    const { getByTestId } = setup({ color: colorWhite });
    const node = getByTestId('circle');

    expect(node).toHaveClass('white');
  });

  test('Transmitted active', () => {
    const { getByTestId } = setup({ active: true });
    const node = getByTestId('circle');

    expect(node).toHaveClass('active');
  });

  test('Event reaction: "onChange"', () => {
    const onChange = jest.fn();

    const { getByTestId } = setup({ onChange });
    const node = getByTestId('circle');

    fireEvent.click(node);
    expect(onChange).toHaveBeenCalled();
  });
});
