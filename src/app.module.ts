import { Module } from '@nestjs/common';
import { EmployeeModule } from './modules/employee/employee.module';

import * as ormconfig from '../ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(ormconfig),
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
