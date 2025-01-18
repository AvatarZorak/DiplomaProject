import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationModule } from '../configuration/configuration.module';

@Module({
  imports: [
    ConfigurationModule,
    MongooseModule.forRoot(
      `mongodb://${process.env.mongo_user}:${process.env.mongo_password}@mongodb-headless:27017`,
      {
        dbName: 'Markbook',
        directConnection: true,
      },
    ),
  ],
})
export class DatabaseConnectionModule {}
