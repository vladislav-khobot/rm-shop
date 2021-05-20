import { render, cleanup } from '@testing-library/react';

import { Price, PRICE_SIZES } from 'components/Price';

describe('Component "Price"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Price {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('price');

    expect(node).toBeInTheDocument();
  });

  test('Transmitted size', () => {
    const { getByTestId } = setup({ size: PRICE_SIZES.medium });
    const node = getByTestId('price');
    const className = node.children[0].className;

    expect(className.includes('medium-int-part')).toBeTruthy();
  });
});
