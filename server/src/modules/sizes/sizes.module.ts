import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SizesController } from 'modules/sizes/sizes.controller';
import { SizesService } from 'modules/sizes/sizes.service';
import { Size, SizesSchema } from 'modules/sizes/schemas/sizes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Size.name,
      schema: SizesSchema,
    }]),
  ],
  controllers: [SizesController],
  providers: [SizesService],
  exports: [SizesService],
})
export class SizesModule {}
