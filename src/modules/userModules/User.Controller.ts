// import {
//   Body,
//   Controller,
//   Get,
//   Header,
//   HttpCode,
//   HttpStatus,
//   Param,
//   ParseIntPipe,
//   Post,
//   Query,
//   Redirect,
//   Req,
//   Res,
// } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { UserDataType_DTO } from './User.dto';
// import { UserService } from './User.Service';
// import { TrimPipe } from 'src/customPipe/trim.pipe';

// @Controller('users') // http://localhost:3000/users
// export class UserController {
//   constructor(private readonly userService: UserService) {}
//   /* getAllUsers */
//   @Get()
//   @Header('Cache-Control', 'none')
//   getUsers() {
//     return this.userService.getUsers();
//   }

//   /* getUserByQuery at query*/
//   @Get('by-name')
//   getUserByQuery(@Query('name') name: string) {
//     console.log('🚀 ~ UserController ~ getUserByQuery ~ name:', name);
//     return this.userService.getUserByQuery(name);
//   }

//   /* getUserById at param */
//   @Get(':id')
//   getUserById(@Param('id', TrimPipe, ParseIntPipe) id: number) {
//     return this.userService.getUserById(id);
//   }

//   /* POST user */
//   @Post()
//   @HttpCode(HttpStatus.CREATED)
//   postUser(@Body() userFromBody: UserDataType_DTO) {
//     return this.userService.postUser(userFromBody);
//   }

//   /* get redirected to another route while accessing "/users" */
//   @Get('/redirectToUsers') // from http://localhost:3000/users/redirectToUsers
//   @Redirect('/users', 301) // to http://localhost:3000/users
//   getRedirectToUsers() {
//     return {
//       message: 'this is users redirectToUsers route',
//     };
//   }
// }

/* ************ */
/* v-2 */

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Query,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './User.Service';
import { UserDataType_DTO } from './User.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('by-name')
  getUserByQuery(@Query('name') name: string) {
    return this.userService.getUserByQuery(name);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() userFromBody: UserDataType_DTO) {
    return this.userService.postUser(userFromBody);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<UserDataType_DTO>,
  ) {
    return this.userService.updateUser(id, updateData);
  }
}
