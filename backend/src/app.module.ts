import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentMarkbookModule } from './student-markbook/student-markbook.module';
import { KeycloakConfigModule } from './keycloak-config/keycloak-config.module';
import { APP_GUARD } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { KeycloakConfigService } from './keycloak-config/keycloak-config.service';

@Module({
  imports: [
    // KeycloakConnectModule.registerAsync({
    //   useExisting: KeycloakConfigService,
    //   imports: [KeycloakConfigModule],
    // }),
    StudentMarkbookModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: ResourceGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AppModule {}