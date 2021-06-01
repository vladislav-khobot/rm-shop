import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FormatUtils } from 'utils/FormatUtils';

import { PRICE_SIZES } from './Price.sizes';
import { StyledPrice } from './Price.style';

function Price(props) {
  const { size, value } = props;

  const [formattedIntPart, formattedDoublePart] = FormatUtils.splitPrice(value);

  const classNameIntPart = clsx({
    'medium-int-part': size === PRICE_SIZES.medium,
    'large-int-part': size === PRICE_SIZES.large,
  });

  const classNameDoublePart = clsx({
    'medium-double-part': size === PRICE_SIZES.medium,
    'large-double-part': size === PRICE_SIZES.large,
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
    PRICE_SIZES.medium,
    PRICE_SIZES.large,
  ]),
  value: PropTypes.number,
};

Price.defaultProps = {
  size: PRICE_SIZES.large,
  value: 0,
};

export { Price };
