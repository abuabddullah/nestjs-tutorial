import { Module } from '@nestjs/common';
import { UserController } from './User.Controller';

@Module({
  controllers: [UserController],
})
export class UserModule {}
