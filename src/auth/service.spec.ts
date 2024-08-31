import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './service';
import { UsersService } from '../users/service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let service: AuthService;
  let mockUsersService: Partial<UsersService>;
  let mockJwtService: Partial<JwtService>;

  beforeEach(async () => {
    mockUsersService = {
      findOne: jest.fn().mockResolvedValue({
        id: 1,
        username: 'testuser',
        password: await bcrypt.hash('password', 10),
        role: 'customer',
      }),
      create: jest.fn().mockResolvedValue({
        id: 1,
        username: 'testuser',
        password: 'hashedpassword',
        role: 'customer',
      }),
    };

    mockJwtService = {
      sign: jest.fn().mockReturnValue('jwtToken'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should register a user', async () => {
    const result = await service.register({
      username: 'testuser',
      password: 'password',
      role: 'customer',
      age: undefined,
    });
    expect(result).toEqual({
      id: 1,
      username: 'testuser',
      age: undefined,
      role: 'customer',
    });
  });

  it('should validate a user', async () => {
    const result = await service.validateUser(1, 'password');
    expect(result).toEqual({
      id: 1,
      username: 'testuser',
      role: 'customer',
    });
  });

  it('should return a token on login', async () => {
    const result = await service.login({
      username: 'testuser',
      id: 1,
      role: 'customer',
    });
    expect(result).toEqual({
      access_token: 'jwtToken',
    });
  });
});
