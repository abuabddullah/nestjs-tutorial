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
