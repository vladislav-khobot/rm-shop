import { cleanup, fireEvent, render } from '@testing-library/react';

import { Ellipse } from './Ellipse';

import { THEME } from 'constants/theme';

describe('Component Ellipse', () => {
  afterEach(() => {
    cleanup();
  });

  const colorWhite = THEME.colors.mainWhite;
  const testColor = THEME.colors.mainRed;

  const setup = (props = {}) => {
    return render(
      <Ellipse {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId(`ellipse-${colorWhite}-`);

    expect(node).toBeInTheDocument();
  });

  test('Transmitted color', () => {
    const { getByTestId } = setup({ color: testColor });
    const node = getByTestId(`ellipse-${testColor}-`);

    expect(node).toBeInTheDocument();
  });

  test('Transmitted active', () => {
    const { getByTestId } = setup({ color: testColor, active: testColor });
    const node = getByTestId(`ellipse-${testColor}-${testColor}`);

    expect(node).toBeInTheDocument();
  });

  test('Event reaction: "onChange"', () => {
    const onChange = jest.fn();

    const { getByTestId } = setup({ onChange });
    const node = getByTestId(`ellipse-${colorWhite}-`);

    fireEvent.click(node);
    expect(onChange).toHaveBeenCalled();

  });
});
