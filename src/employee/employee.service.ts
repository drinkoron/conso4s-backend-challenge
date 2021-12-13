import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  getAll() {
    return `This action returns all employee`;
  }

  getOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  check(id: number) {
    return `This action updates a #${id} employee`;
  }
}
