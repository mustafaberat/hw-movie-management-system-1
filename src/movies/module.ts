import { Module } from '@nestjs/common';
import { MoviesService } from './service';
import { MoviesController } from './controller';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
