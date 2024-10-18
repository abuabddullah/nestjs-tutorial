// import { Inject, Injectable, NotFoundException } from '@nestjs/common';
// import { UserDataType_DTO } from './User.dto';

// const usersDB = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Jane' },
//   { id: 3, name: 'Joe' },
// ];

// @Injectable()
// export class UserService {
//   constructor(@Inject('DB_URI') private dbUri: string) {}
//   getUsers() {
//     console.log('🚀 ~ UserService ~ dbUri:', this.dbUri);
//     return usersDB;
//   }

//   getUserByQuery(name: string) {
//     const user = usersDB.find((user) => user.name === name);
//     if (!user) {
//       throw new NotFoundException('user not found');
//     }
//     return user;
//   }

//   getUserById(id: number) {
//     const user = usersDB.find((user) => user.id === Number(id));
//     if (!user) {
//       throw new NotFoundException('user not found');
//     }
//     return user;
//   }

//   postUser(userFromBody: UserDataType_DTO) {
//     usersDB.push(userFromBody);
//     console.log('🚀 ~ UserController ~ postUser ~ usersDB:', usersDB);
//     return userFromBody;
//   }
// }

/* ************ */
/* v-2 */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './User.Schema';
import { UserDataType_DTO } from './User.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserByQuery(name: string): Promise<User> {
    const user = await this.userModel.findOne({ name }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userModel.findOne({ id }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async postUser(userFromBody: UserDataType_DTO): Promise<User> {
    const newUser = new this.userModel(userFromBody);
    return newUser.save();
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.userModel.findOneAndDelete({ id }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async updateUser(
    id: number,
    updateData: Partial<UserDataType_DTO>,
  ): Promise<User> {
    const updatedUser = await this.userModel
      .findOneAndUpdate({ id }, updateData, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    return updatedUser;
  }
}
