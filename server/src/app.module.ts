import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { appConfig } from 'config/app.config';
import { ColorsModule } from './modules/colors/colors.module';
import { SizesModule } from './modules/sizes/sizes.module';

@Module({
  imports: [
    MongooseModule.forRoot(appConfig.db.connection),
    ColorsModule,
    SizesModule,
  ],
})
export class AppModule {}
