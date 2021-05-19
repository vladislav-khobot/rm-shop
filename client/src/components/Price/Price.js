import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { getFormattedIntAndFloadPartsOfValue } from 'tools/tools';

import { priceSizes } from './Price.sizes';
import { StyledPrice } from './Price.style';

function Price(props) {
  const { size, value } = props;
  const { formattedIntPart, formattedDoublePart } = getFormattedIntAndFloadPartsOfValue(value);

  const classNameIntPart = clsx({
    'medium-int-part': size === priceSizes.medium,
    'large-int-part': size === priceSizes.large,
  });

  const classNameDoublePart = clsx({
    'medium-double-part': size === priceSizes.medium,
    'large-double-part': size === priceSizes.large,
  });

  return (
    <StyledPrice data-testid="price">
      <div className={classNameIntPart}>
        {`$ ${formattedIntPart}`}
      </div>
      <div className={classNameDoublePart}>
        {formattedDoublePart}
      </div>
    </StyledPrice>
  );
}

Price.propTypes = {
  size: PropTypes.oneOf([
    priceSizes.medium,
    priceSizes.large,
  ]),
  value: PropTypes.number,
};

Price.defaultProps = {
  size: priceSizes.large,
  value: 0,
};

export { Price };
