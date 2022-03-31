import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeycloakModule } from './keycloak/keycloak.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [KeycloakModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
