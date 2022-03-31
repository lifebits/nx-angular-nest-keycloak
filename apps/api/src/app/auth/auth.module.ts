import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { KeycloakModule } from '../keycloak/keycloak.module'

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [KeycloakModule],
})
export class AuthModule {}
