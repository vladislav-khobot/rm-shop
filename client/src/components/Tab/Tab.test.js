import { render, cleanup, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store/store';

import { Tab } from 'components/Tab';

describe('Component "Tab"', () => {
  afterEach(() => {
    cleanup();
  });

  const setup = (props = {}) => {
    return render(
      <Provider store={store}>
        <BrowserRouter>
          <Tab {...props} />
        </BrowserRouter>
      </Provider>
    );
  }

  test('Is render', () => {
    const { getByTestId } = setup();
    const node = getByTestId('tab');

    expect(node).toBeInTheDocument();
  });

  test('Transmitted active', () => {
    const { getByTestId } = setup({ active: true });
    const node = getByTestId('tab');
    const className = node.className;

    expect(className.includes('active')).toBeTruthy();
  });

  test('Event reaction "onClick"', () => {
    const onClick = jest.fn();

    const { getByTestId } = setup({ onClick });
    const node = getByTestId('tab');
    fireEvent.click(node);

    expect(onClick).toHaveBeenCalled();
  });
});
