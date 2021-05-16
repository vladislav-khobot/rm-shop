import { render, cleanup, fireEvent } from '@testing-library/react';

import { Input } from 'components/Input';

describe('Component Input', () => {

  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Input {...props} />
    );
  };

  test('Is render', () => {

    const { getByTestId } = setup();
    const node = getByTestId('input');

    expect(node).toBeInTheDocument();
  });

  test('Transmitted value', () => {

    const testValue = 'test';
    const { getByTestId } = setup({ value: testValue });
    const node = getByTestId('input');

    expect(node.value).toEqual(testValue);
  });

  test('Transmitted placeholder', () => {

    const testPlaceholder = 'input something';
    const { getByTestId } = setup({ placeholder: testPlaceholder });
    const node = getByTestId('input');

    expect(node.placeholder).toEqual(testPlaceholder);
  });

  test('Event reaction "onChange"', () => {

    const onChange = jest.fn();

    const { getByTestId } = setup({ onChange });
    const node = getByTestId('input');

    fireEvent.change(node, {
      target: {
        value: 'test',
      }
    });

    expect(onChange).toHaveBeenCalled();
  });

});
