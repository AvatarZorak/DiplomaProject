import { Module } from '@nestjs/common';
import { StudentMarkbookController } from './student-markbook.controller';
import { StudentMarkbookService } from './student-markbook.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from '../schema/student.schema';
import { DatabaseConnectionModule } from '../database-connection/database-connection.module';
import {KeycloakConnectModule} from "nest-keycloak-connect";
import {KeycloakConfigService} from "../keycloak-config/keycloak-config.service";
import {KeycloakConfigModule} from "../keycloak-config/keycloak-config.module";

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
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [KeycloakConfigModule],
    }),
  ],
  controllers: [StudentMarkbookController],
  providers: [StudentMarkbookService],
})
export class StudentMarkbookModule {}
