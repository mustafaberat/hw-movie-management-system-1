import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MoviesService } from './service';
import { CreateMovieDto } from './dto';
import { Movie } from './entities';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('movies')
@ApiBearerAuth()
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new movie' })
  @ApiResponse({ status: 201, description: 'The movie has been successfully created.', type: Movie })
  async create(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all movies' })
  @ApiResponse({ status: 200, description: 'Return all movies.', type: [Movie] })
  async findAll(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a movie by ID' })
  @ApiResponse({ status: 204, description: 'The movie has been successfully deleted.' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.moviesService.delete(+id);
  }
}
