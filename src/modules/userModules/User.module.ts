// import { Module } from '@nestjs/common';
// import { UserController } from './User.Controller';
// import { UserService } from './User.Service';

// @Module({
//   providers: [
//     // UserService, // => { provide: UserService, useClass: UserService }
//     {
//       provide: UserService,
//       useClass: UserService,
//     },
//     {
//       provide: 'DB_URI',
//       useValue: 'mongodb://localhost:27017/nestjs-tutorial',
//     },
//   ],

//   controllers: [UserController],
// })
// export class UserModule {}

/* ************ */
/* v-2 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './User.Controller';
import { UserService } from './User.Service';
import { User, UserSchema } from './User.Schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
