import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { DiscountsService } from 'modules/discounts/discounts.service';
import { DiscountGenerateResponseDto } from 'modules/discounts/dto/discount-generate.response.dto';

@ApiTags('discounts')
@Controller('api/discounts')
export class DiscountsController {
  constructor(private discountsService: DiscountsService) {}

  @Get('')
  @ApiOperation({ summary: 'Try to win discount' })
  @ApiOkResponse({ type: DiscountGenerateResponseDto })
  async generate(): Promise<DiscountGenerateResponseDto> {
    return this.discountsService.generate();
  }
}
