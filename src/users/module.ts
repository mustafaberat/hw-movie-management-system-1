import { Module } from '@nestjs/common';
import { UsersService } from './service';
import { UsersController } from './controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
