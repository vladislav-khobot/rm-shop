import { Controller, Get } from '@nestjs/common';
import { ColorsService } from 'modules/colors/colors.service';
import { Color } from 'modules/colors/schemas/color.schema';

@Controller('api/colors')
export class ColorsController {
  constructor(private colorsService: ColorsService) {}

  @Get('')
  async list(): Promise<Color[]> {
    return this.colorsService.findAll();
  }
}
