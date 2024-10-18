import { Module } from '@nestjs/common';
import { UserController } from './User.Controller';
import { UserService } from './User.Service';

@Module({
  providers: [UserService], // == {provide: UserService,useValue: UserService,},

  controllers: [UserController],
})
export class UserModule {}
