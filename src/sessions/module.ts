import { Module } from '@nestjs/common';
import { SessionsService } from './service';
import { SessionsController } from './controller';

@Module({
  providers: [SessionsService],
  controllers: [SessionsController],
})
export class SessionsModule {}
