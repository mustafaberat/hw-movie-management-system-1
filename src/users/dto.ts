import { IsString, IsInt, IsIn, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty({ enum: ['manager', 'customer'] })
  @IsIn(['manager', 'customer'])
  role: 'manager' | 'customer';
}
