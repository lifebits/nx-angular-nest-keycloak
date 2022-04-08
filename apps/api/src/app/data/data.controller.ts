import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';
import { AuthService } from "../auth/auth.service";

import {AuthenticatedUser, Roles, Public, Resource, Scopes} from 'nest-keycloak-connect';

@Controller('data')
@Resource('data')
export class DataController {
  constructor(
    private readonly authService: AuthService,
    private readonly dataService: DataService
  ) {}

  @Get('public')
  @Public()
  @Scopes('view')
  getPublic() {
    return `${this.authService.getHello()} from public`;
  }

  @Get('user')
  @Roles({ roles: ['user'] })
  getUser(): string {
    return `${this.authService.getHello()} from user`;
  }

  @Get('admin')
  @Roles({ roles: ['admin'] })
  getAdmin(): string {
    return `${this.authService.getHello()} from admin`;
  }

  @Get('auth')
  getAuth(): string {
    return `${this.authService.getHello()} from all`;
  }
}
