import { Module } from '@nestjs/common';
import { WatchHistoryService } from './service';
import { WatchHistoryController } from './controller';
import { UsersModule } from '../users/module';
import { MoviesModule } from '../movies/module';

@Module({
  imports: [UsersModule, MoviesModule],
  providers: [WatchHistoryService],
  controllers: [WatchHistoryController],
})
export class WatchHistoryModule {}
