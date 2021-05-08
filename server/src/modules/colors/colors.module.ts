import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ColorsController } from 'modules/colors/colors.controller';
import { ColorsService } from 'modules/colors/colors.service';
import { Color, ColorSchema } from 'modules/colors/schemas/color.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Color.name,
      schema: ColorSchema,
    }]),
  ],
  controllers: [ColorsController],
  providers: [ColorsService],
  exports: [ColorsService],
})
export class ColorsModule {}
