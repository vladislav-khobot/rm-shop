import * as winston from 'winston';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { WinstonModule, utilities as winstonUtilities } from 'nest-winston';

import { appConfig } from 'config/app.config';
import { ConfigUtils } from 'utils/ConfigUtils/ConfigUtils';
import { AppModule } from './app.module';

async function bootstrap() {
  const isConfigValid = ConfigUtils.validate(appConfig);
  if (!isConfigValid) {
    process.exit(1);
    return;
  }

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winstonUtilities.format.nestLike(),
          ),
        }),
      ],
    })
  });
  const logger = app.get(Logger);

  app.enableCors();

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  const options = new DocumentBuilder()
    .setTitle('Rick & Morty')
    .setDescription('The Rick & Morty Shop API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(appConfig.port);
  logger.log(`Server is running on ${appConfig.port} port`);
}

bootstrap();
