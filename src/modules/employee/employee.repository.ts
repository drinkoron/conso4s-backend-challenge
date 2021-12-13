import { EntityRepository, Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/employee.dto";
import { Employee } from '../../entities/employee.entity';
import { EmployeeStatus } from "../../shared/interfaces/interfaces";
import { APIError } from "src/error";

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  public async getAll(){
    return await this.find();
  }
  
  public async getOneById(id: string): Promise<Employee> {
    return await this.findOne({id: String(id)});
  }

  public async createEmployee(data: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = new Employee();
    newEmployee.firstName = data.firstName;
    newEmployee.lastName = data.lastName;
    return newEmployee.save();
  }

  public async updateStatus(id: string): Promise<boolean> {
    const employee = await this.getOneById(id);

    if (!employee) throw new APIError('EMPLOYEE_NOT_FOUND');

    let newStatus = employee.status === EmployeeStatus.CHECKED_IN ? EmployeeStatus.CHECKED_OUT : EmployeeStatus.CHECKED_IN;

    const updatePassword = await this.update({ id }, { status: newStatus });
    return updatePassword.affected === 1;
  }
}
