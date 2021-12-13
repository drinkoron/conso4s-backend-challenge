import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.SERVER_PORT, () => {
    Logger.log(
      `Application started on port ${process.env.SERVER_PORT}`,
      'Bootstrap'
    );
  });
}

bootstrap();
