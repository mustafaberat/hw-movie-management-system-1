import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { WatchHistoryService } from './service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('watch-history')
@Controller('watch-history')
export class WatchHistoryController {
  constructor(private readonly watchHistoryService: WatchHistoryService) {}

  @Post('userId/:movieId')
  async addEntry(
    @Param('userId') userId: number,
    @Param('movieId') movieId: number,
  ) {
    return this.watchHistoryService.addEntry(userId, movieId);
  }

  @Get(':userId')
  async findByUser(@Param('userId') userId: number) {
    return this.watchHistoryService.findByUser(userId);
  }

  @Get()
  async findAll() {
    return this.watchHistoryService.findAll();
  }
}
