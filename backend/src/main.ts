import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StudentMarkbookService } from "./student-markbook/student-markbook.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5000);
}

bootstrap();
