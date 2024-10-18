import { Module } from '@nestjs/common';
import { UserController } from './User.Controller';
import { UserService } from './User.Service';

@Module({
  providers: [
    // UserService, // => { provide: UserService, useClass: UserService }
    {
      provide: UserService,
      useClass: UserService,
    },
    {
      provide: 'DB_URI',
      useValue: 'mongodb://localhost:27017/nestjs-tutorial',
    },
  ],

  controllers: [UserController],
})
export class UserModule {}
