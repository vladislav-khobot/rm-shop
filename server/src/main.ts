import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

const port = process.env.PORT || 3010;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  await app.listen(port);
  logger.log(`Server is running on http://localhost:${port}`);
}
bootstrap();
