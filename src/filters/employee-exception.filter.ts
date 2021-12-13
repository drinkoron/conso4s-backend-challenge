import {
  ExceptionFilter,
  ArgumentsHost,
} from "@nestjs/common";
import {} from "class-validator";
import { Response } from "express";
import { QueryFailedError } from "typeorm";
import { APIError, ValidationError } from "../error";

const errorHandler = (e: ValidationError | APIError | QueryFailedError) => {
  if(e instanceof ValidationError || e instanceof APIError)
    return e;
  
  if(e instanceof QueryFailedError)
    return {
      name: "DATABASE_ERROR",
      statusCode: 400,
      message: e.message,
    }

  return {
    name: "SYSTEM_ERROR",
    statusCode: 500,
  }
}

export class EmployeeExceptionFilter implements ExceptionFilter {
  catch(e: ValidationError | APIError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    const service_error = errorHandler(e);
    return response.json({ service_error });
  }
}