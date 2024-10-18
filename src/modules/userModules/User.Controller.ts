import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDataType_DTO } from './user.dto';

const usersDB = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Joe' },
];

@Controller('users') // http://localhost:3000/users
export class UserController {
  /* getAllUsers */
  @Get()
  @Header('Cache-Control', 'none')
  getUsers() {
    return usersDB;
  }

  /* getUserByQuery at query*/
  @Get('by-name')
  getUserByQuery(@Query('name') name: string) {
    console.log('🚀 ~ UserController ~ getUserByQuery ~ name:', name);
    const user = usersDB.find((user) => user.name === name);
    if (!user) {
      return 'user not found';
    }
    return user;
  }

  /* getUserById at param */
  @Get(':id')
  getUserById(@Param('id') id: string) {
    const user = usersDB.find((user) => user.id === Number(id));
    if (!user) {
      return 'user not found';
    }
    return user;
  }

  /* POST user */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  postUser(@Body() userFromBody: UserDataType_DTO) {
    usersDB.push(userFromBody);
    console.log('🚀 ~ UserController ~ postUser ~ usersDB:', usersDB);
    return userFromBody;
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
