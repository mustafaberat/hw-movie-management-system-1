import { Injectable } from '@nestjs/common';
import { Movie } from './entities';
import { CreateMovieDto } from './dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const newMovie: Movie = {
      id: Date.now(),
      ...createMovieDto,
    };

    this.movies.push(newMovie);
    return newMovie;
  }

  async update(id: number, movie: Partial<Movie>): Promise<Movie> {
    const movieIndex = this.movies.findIndex((m) => m.id === id);
    if (movieIndex !== -1) {
      this.movies[movieIndex] = { ...this.movies[movieIndex], ...movie };
      return this.movies[movieIndex];
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    this.movies = this.movies.filter((m) => m.id !== id);
  }

  async findAll(): Promise<Movie[]> {
    return this.movies;
  }
}
