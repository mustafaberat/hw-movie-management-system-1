import { Injectable } from '@nestjs/common';
import { WatchHistory } from './entities';

@Injectable()
export class WatchHistoryService {
  private watchHistories: WatchHistory[] = [];

  async addEntry(userId: number, movieId: number): Promise<WatchHistory> {
    const entry = new WatchHistory();
    entry.id = this.watchHistories.length + 1;
    entry.userId = userId;
    entry.movieId = movieId;
    entry.watchedAt = new Date();

    this.watchHistories.push(entry);
    return entry;
  }

  async findByUser(userId: number): Promise<WatchHistory[]> {
    return this.watchHistories.filter(entry => entry.userId === userId);
  }

  async findAll(): Promise<WatchHistory[]> {
    return this.watchHistories;
  }
}
