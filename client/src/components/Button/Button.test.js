import { render, cleanup, fireEvent } from '@testing-library/react';
import { Button, BUTTON_TYPES } from 'components/Button';

describe('Component Button', () => {

  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Button {...props} />
    );
  };

  test('Normal render', () => {
    const { getByTestId } = setup();

    const node = getByTestId('button');

    expect(node).toBeInTheDocument();
  });

  test('Render with type "default"', () => {
    const { getByTestId } = setup();

    const node = getByTestId('button');
    const className = node.className;

    expect(node).toBeInTheDocument();
    expect(className.includes('default')).toBeTruthy();
  });

  test('Render with type "primary"', () => {
    const { getByTestId } = setup({ type: BUTTON_TYPES.primary });

    const node = getByTestId('button');
    const className = node.className;

    expect(node).toBeInTheDocument();
    expect(className.includes('primary')).toBeTruthy();
  });

  test('Event reaction: "onClick"', () => {
    const onClick = jest.fn();

    const { getByTestId } = setup({ onClick });

    const node = getByTestId('button');

    fireEvent.click(node);
    expect(onClick).toHaveBeenCalled();
  });
});
