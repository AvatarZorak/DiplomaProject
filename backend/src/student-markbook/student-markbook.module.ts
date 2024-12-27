import { Module } from '@nestjs/common';
import { StudentMarkbookController } from './student-markbook.controller';
import { StudentMarkbookService } from './student-markbook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from '../schema/student.schema';
import { DatabaseConnectionModule } from '../database-connection/database-connection.module';

@Module({
  imports: [
    DatabaseConnectionModule,
    MongooseModule.forFeature([
      {
        name: 'Student',
        schema: StudentSchema,
        collection: 'Student',
      },
    ]),
  ],
  controllers: [StudentMarkbookController],
  providers: [StudentMarkbookService],
})
export class StudentMarkbookModule {}
