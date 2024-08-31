import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/module';
import { UsersModule } from './users/module';
import { MoviesModule } from './movies/module';
import { SessionsModule } from './sessions/module';
import { WatchHistoryModule } from './watch-history/module';

import { User } from './users/entities';
import { Movie } from './movies/entities';
import { Session } from './sessions/entities';
import { WatchHistory } from './watch-history/entities';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [User, Movie, Session, WatchHistory],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    MoviesModule,
    SessionsModule,
    WatchHistoryModule,
  ],
})
export class AppModule {}
