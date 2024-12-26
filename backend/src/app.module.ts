import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentMarkbookModule } from './student-markbook/student-markbook.module';

@Module({
  imports: [StudentMarkbookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
