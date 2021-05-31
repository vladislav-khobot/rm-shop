import React, { useEffect, useState } from 'react';

import { StyledBasket } from './Basket.style';

import { ReactComponent as BasketSVG } from './Basket.svg';

function Basket() {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProductCount(5); // for test
  }, []);

  return (
    <StyledBasket data-testid="basket">
      <BasketSVG className="svg" />
      <div>{productCount} T-shirts</div>
    </StyledBasket>
  );
}

export { Basket };
