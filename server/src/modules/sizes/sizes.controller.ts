import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { SizesService } from 'modules/sizes/sizes.service';
import { Size } from 'modules/sizes/schemas/sizes.schema';

@ApiTags('sizes')
@Controller('api/sizes')
export class SizesController {
  constructor(private sizesService: SizesService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all available sizes' })
  @ApiOkResponse({ type: [Size] })
  async list(): Promise<Size[]> {
    return this.sizesService.findAll();
  }
}
