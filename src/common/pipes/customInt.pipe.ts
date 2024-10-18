import {
  ArgumentMetadata,
  HttpStatus,
  Injectable,
  ParseIntPipe,
} from '@nestjs/common';
import { response } from 'express';

@Injectable()
export class CustomIntPipe extends ParseIntPipe {
  constructor() {
    super({
      exceptionFactory: (errors) => ({
        status: HttpStatus.BAD_REQUEST,
        response: {
          message: 'Numeric expression is required',
          code: 'ValidationError',
          errors,
        },
      }),
    });
  }
}
