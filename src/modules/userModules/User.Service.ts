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
