import { Module } from '@nestjs/common';
import { StudentMarkbookController } from './student-markbook.controller';
import { StudentMarkbookService } from './student-markbook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from '../schema/student.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `./mongo.env`,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.mongo_user}:${process.env.mongo_password}@localhost:27017`,
      {
        dbName: 'Markbook',
      },
    ),
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
