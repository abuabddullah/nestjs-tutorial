import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findUserById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id).populate('posts').exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async createUser(name: string): Promise<User> {
    const newUser = new this.userModel({ name });
    return newUser.save();
  }

  async findAllUsers(): Promise<User[]> {
    return this.userModel.find().populate('posts').exec();
  }
}
