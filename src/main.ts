import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { CustomValidationPipe } from './error';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new CustomValidationPipe());

  await app.listen(process.env.SERVER_PORT, () => {
    Logger.log(
      `Application started on port ${process.env.SERVER_PORT}`,
      'Bootstrap'
    );
  });
}

bootstrap();
