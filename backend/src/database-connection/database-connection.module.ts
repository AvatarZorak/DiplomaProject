import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationModule } from '../configuration/configuration.module';

@Module({
  imports: [
    ConfigurationModule,
    MongooseModule.forRoot(
      `mongodb://${process.env.mongo_user}:${process.env.mongo_password}@localhost:27017`,
      {
        dbName: 'Markbook',
      },
    ),
  ],
})
export class DatabaseConnectionModule {}
