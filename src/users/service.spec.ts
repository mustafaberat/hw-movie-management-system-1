import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './service';
import { User } from './entities';

describe('UsersService', () => {
  let service: UsersService;
  let users: User[];

  beforeEach(async () => {
    users = [
      {
        id: 1,
        username: 'testuser1',
        password: 'hashedpassword',
        role: 'customer',
        age: 25,
      },
      {
        id: 2,
        username: 'testuser2',
        password: 'hashedpassword',
        role: 'manager',
        age: 30,
      },
    ];

    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    service['users'] = users;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find all users', async () => {
    const result = await service.findAll();
    expect(result).toEqual(users);
  });

  it('should find a user by ID', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual(users[0]);
  });

  it('should create a new user', async () => {
    const newUser: User = {
      id: 3,
      username: 'testuser3',
      password: 'hashedpassword',
      role: 'customer',
      age: 40,
    };
    const result = await service.create(newUser);
    expect(result).toEqual(newUser);
  });
});
