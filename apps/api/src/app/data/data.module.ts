import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';

import { AuthService } from '../auth/auth.service';

@Module({
  controllers: [DataController],
  providers: [DataService, AuthService],
})
export class DataModule {}
