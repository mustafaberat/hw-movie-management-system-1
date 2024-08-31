import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './service';
import { Movie } from './entities';

describe('MoviesService', () => {
  let service: MoviesService;
  let movies: Movie[];

  beforeEach(async () => {
    movies = [
      { id: 1, name: 'Movie1', ageRestriction: 12, sessions: ['10.00-12.00'] },
      { id: 2, name: 'Movie2', ageRestriction: 16, sessions: ['12.00-14.00'] },
    ];

    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    service['movies'] = movies;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new movie', async () => {
    const newMovie: Movie = {
      id: 3,
      name: 'Movie3',
      ageRestriction: 18,
      sessions: ['14.00-16.00'],
    };
    const result = await service.create(newMovie);
    expect(result).toEqual(newMovie);
  });

  it('should find all movies', async () => {
    const result = await service.findAll();
    expect(result).toEqual(movies);
  });

  it('should update a movie', async () => {
    const updatedMovie = { name: 'Updated Movie1' };
    const result = await service.update(1, updatedMovie);
    expect(result.name).toEqual('Updated Movie1');
  });

  it('should delete a movie', async () => {
    await service.delete(1);
    const result = await service.findAll();
    expect(result.length).toBe(1);
  });
});
