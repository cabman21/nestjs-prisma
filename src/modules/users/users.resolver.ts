import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/modules/users/users.model';
import { UsersService } from 'src/modules/users/users.service';

@Resolver()
export class UserResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Mutation(() => User)
  async createUser(
    @Args({ name: 'username', type: () => String }) username: string,
    @Args({ name: 'userId', type: () => Int }) userId: number,
  ) {
    return this.usersService.createUser({ username, userId });
  }

  @Mutation(() => User)
  async updateUser(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args({ name: 'username', type: () => String }) username: string,
    @Args({ name: 'userId', type: () => Int }) userId: number,
  ) {
    return this.usersService.updateUser({ username, userId, id });
  }

  @Mutation(() => User)
  async deleteUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.usersService.deleteUser({ id });
  }
}
