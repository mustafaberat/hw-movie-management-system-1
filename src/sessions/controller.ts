import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { SessionsService } from './service';
import { CreateSessionDto } from './dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('sessions')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  @ApiBody({ type: CreateSessionDto })
  async create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.sessionsService.delete(id);
  }

  @Get()
  async findAll() {
    return this.sessionsService.findAll();
  }
}
