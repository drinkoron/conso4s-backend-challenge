import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';

import { EmployeeExceptionFilter } from '../../filters/employee-exception.filter';
import { CreateEmployeeDto, UUID } from './dto/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
@UseFilters(EmployeeExceptionFilter)
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.getAll();
  }

  @Get(':id/qr-code')
  public async GetQR(@Param() params: UUID, @Res() res: Response) {
    const qr = await this.employeeService.getQR(params.id);
    const qrImg = Buffer.from(JSON.stringify(qr.replace(/^data:image\/png;base64,/, '')), 'base64');

    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': qrImg.length
    });
    res.end(qrImg);
  }

  @Get(':id/check')
  check(@Param() params: UUID) {
    return this.employeeService.check(params.id);
  }
}
