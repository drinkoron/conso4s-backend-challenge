import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { APIError } from 'src/error';
import { QrService } from '../qr/qr.service';
import { CreateEmployeeDto } from './dto/employee.dto';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRepository: EmployeeRepository,
    @Inject(QrService)
    private qr: QrService,
  ) {}

  public async create(dto: CreateEmployeeDto) {
    return await this.employeeRepository.createEmployee(dto);
  }

  public async getAll() {
    return {
      employees: await this.employeeRepository.getAll()
    }
  }

  public async getQR(id: string) {
    const employee = await this.employeeRepository.getOneById(id);

    if (!employee) throw new APIError('EMPLOYEE_NOT_FOUND');

    return await this.qr.generate(
      `${process.env.CALLBACK_URL}:${process.env.SERVER_PORT}/employee/${id}/check`,
    );
  }

  public async check(id: string) {
    return {
      checked: await this.employeeRepository.updateStatus(id),
    };
  }
}
