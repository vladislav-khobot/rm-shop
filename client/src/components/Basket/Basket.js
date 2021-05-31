import React from 'react';
import PropTypes from 'prop-types';

import { StyledBasket } from './Basket.style';

import { ReactComponent as BasketSVG } from './Basket.svg';

function Basket(props) {
  const { productCount } = props;

  return (
    <StyledBasket data-testid="basket">
      <BasketSVG className="svg" />
      <div>{productCount} T-shirts</div>
    </StyledBasket>
  );
}

Basket.propTypes = {
  productCount: PropTypes.number,
};

Basket.defaultProps = {
  productCount: 0,
};

export { Basket };
