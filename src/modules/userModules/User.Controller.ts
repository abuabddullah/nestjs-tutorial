import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users') // http://localhost:3000/users
export class UserController {
  @Get()
  @Header('Cache-Control', 'none')
  getUsers(@Req() req: Request, @Res() res: Response) {
    res.status(HttpStatus.ACCEPTED).json({
      message: 'Hello NestJS from express style response',
      users: [],
    });
  }

  /* get redirected to another route while accessing "/users" */
  @Get('/redirectToUsers') // from http://localhost:3000/users/redirectToUsers
  @Redirect('/users', 301) // to http://localhost:3000/users
  getRedirectToUsers() {
    return {
      message: 'this is users redirectToUsers route',
    };
  }
}
