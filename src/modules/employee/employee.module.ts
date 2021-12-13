import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { QrModule } from '../qr/qr.module';
import { EmployeeRepository } from './employee.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([EmployeeRepository]),
    QrModule
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule {}
