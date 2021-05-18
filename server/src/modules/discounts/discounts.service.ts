import { Injectable } from '@nestjs/common';
import { toInteger } from 'lodash';

import { DiscountGenerateResponseDto } from 'modules/discounts/dto/discount-generate.response.dto';

@Injectable()
export class DiscountsService {

  async generate(): Promise<DiscountGenerateResponseDto> {
    const random = Math.random() * 10;
    const result: DiscountGenerateResponseDto = {
      discount: toInteger(random),
    };

    return result;
  }
}
