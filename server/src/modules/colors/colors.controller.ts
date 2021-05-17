import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { ColorsService } from 'modules/colors/colors.service';
import { Color } from 'modules/colors/schemas/color.schema';

@ApiTags('colors')
@Controller('api/colors')
export class ColorsController {
  constructor(private colorsService: ColorsService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all available colors' })
  @ApiOkResponse({ type: [Color] })
  async list(): Promise<Color[]> {
    return this.colorsService.findAll();
  }
}
