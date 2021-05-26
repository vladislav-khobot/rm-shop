import { render, cleanup } from '@testing-library/react';

import { Shirt, SHIRT_SIZES } from './';

import testImage from 'assets/images/test-print-image.png';

describe('Component "Shirt"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props) => {
    return render(
      <Shirt {...props} />
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('shirt');

    expect(node).toBeInTheDocument();
  });

  test('Transmitted size', () => {
    const { getByTestId } = setup({ size: SHIRT_SIZES.large });
    const node = getByTestId('shirt');

    const className = node.className;
    expect(className.includes('large')).toBeTruthy();
  });

  test('Transmitted image', () => {
    const { getByTestId } = setup({ image: testImage });
    const node = getByTestId('shirt');

    const src = node.children[1].src;
    expect(src.includes('test-print-image.png')).toBeTruthy();
  });
});
