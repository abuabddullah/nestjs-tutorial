import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserDataType_DTO } from './User.dto';

const usersDB = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Joe' },
];

@Injectable()
export class UserService {
  constructor(@Inject('DB_URI') private dbUri: string) {}
  getUsers() {
    console.log('🚀 ~ UserService ~ dbUri:', this.dbUri);
    return usersDB;
  }

  getUserByQuery(name: string) {
    const user = usersDB.find((user) => user.name === name);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  getUserById(id: number) {
    const user = usersDB.find((user) => user.id === Number(id));
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  postUser(userFromBody: UserDataType_DTO) {
    usersDB.push(userFromBody);
    console.log('🚀 ~ UserController ~ postUser ~ usersDB:', usersDB);
    return userFromBody;
  }
}
