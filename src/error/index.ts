import { ArgumentMetadata, ValidationPipe } from '@nestjs/common';
import { APIErrors } from './errors';
import { APIErrorsList } from './interfaces';

export interface ValidationError {
  name: string;
  messages: Array<string>;
  status: number;
}
export class ValidationError extends Error {
  constructor(messages: Array<string>) {
    super();
    this.name = 'VALIDATION_ERROR';
    this.messages = messages;
    this.status = 409;
  }
}

export class CustomValidationPipe extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (e) {
      throw new ValidationError(e.response.message);
    }
  }
}

export class APIError extends Error {
  statusCode: number;
  
  constructor(name: APIErrorsList, opt?: Object) {
    super();
    this.message = APIErrors[name];
    this.statusCode = 400;
    this.name = name;

    if (opt) Object.assign(this, opt);
  }
}
