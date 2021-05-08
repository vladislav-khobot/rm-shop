import { Module } from '@nestjs/common';

import { GalleryController } from 'modules/gallery/gallery.controller';
import { GalleryService } from 'modules/gallery/gallery.service';
import { ColorsModule } from 'modules/colors/colors.module';
import { SizesModule } from 'modules/sizes/sizes.module';
import { CharactersModule } from 'modules/characters/characters.module';

@Module({
  imports: [
    ColorsModule,
    SizesModule,
    CharactersModule,
  ],
  controllers: [GalleryController],
  providers: [GalleryService]
})
export class GalleryModule {}
