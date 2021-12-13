import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class UUID {
  @IsUUID()
  id: string;
}

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}
