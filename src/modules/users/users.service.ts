import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private repository: UsersRepository) {}

  async createUser(params: {
    username: User[`username`];
    userId: User[`userId`];
  }) {
    const { username } = params;

    // call repository layer
    const user = await this.repository.createUser({
      data: {
        username,
      },
    });

    // do other things in the service layer... e.g. send email of user

    return user;
  }

  async updateUser(params: {
    id: User[`id`];
    username: User[`username`];
    userId: User[`id`];
  }) {
    const { id, username } = params;

    // call repository layer
    const user = await this.repository.updateUser({
      where: { id: id },
      data: {
        username,
      },
    });

    return user;
  }

  async deleteUser(params: { id: User[`id`] }) {
    const { id } = params;

    // call repository layer
    const user = await this.repository.deleteUser({
      where: { id: id },
    });

    return user;
  }

  async getUsers() {
    const users = await this.repository.getUsers({});
    return users;
  }
}
