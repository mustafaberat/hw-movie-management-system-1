import { Injectable } from '@nestjs/common';
import { User } from './entities';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser: User = {
      id: Date.now(),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }
  async findOne(id: number): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }
}
