import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { appConfig } from 'config/app.config';
import { ColorsModule } from './modules/colors/colors.module';
import { SizesModule } from './modules/sizes/sizes.module';
import { CharactersModule } from './modules/characters/characters.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { AuthModule } from './modules/auth/auth.module';
import { OrdersModule } from './modules/orders/orders.module';
import { DiscountsModule } from './modules/discounts/discounts.module';

@Module({
  imports: [
    MongooseModule.forRoot(appConfig.db.connection),
    ColorsModule,
    SizesModule,
    CharactersModule,
    GalleryModule,
    AuthModule,
    OrdersModule,
    DiscountsModule,
  ],
})
export class AppModule {}
