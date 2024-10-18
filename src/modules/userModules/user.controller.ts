import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Post()
  createUser(@Body('name') name: string) {
    return this.userService.createUser(name);
  }
}
