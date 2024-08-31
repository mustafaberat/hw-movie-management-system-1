import { Injectable, NotFoundException } from '@nestjs/common';
import { Session } from './entities';
import { CreateSessionDto } from './dto';

@Injectable()
export class SessionsService {
  private readonly sessions: Session[] = [];

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const newSession: Session = {
      id: Date.now(),
      ...createSessionDto,
    };

    this.sessions.push(newSession);
    return newSession;
  }

  async findAll(): Promise<Session[]> {
    return this.sessions;
  }

  async findById(id: number): Promise<Session> {
    const session = this.sessions.find((s) => s.id === id);
    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
    return session;
  }

  async update(
    id: number,
    updateSessionDto: Partial<Session>,
  ): Promise<Session> {
    const sessionIndex = this.sessions.findIndex((s) => s.id === id);
    if (sessionIndex === -1) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }

    const updatedSession = {
      ...this.sessions[sessionIndex],
      ...updateSessionDto,
    };
    this.sessions[sessionIndex] = updatedSession;
    return updatedSession;
  }

  async delete(id: number): Promise<void> {
    const sessionIndex = this.sessions.findIndex((s) => s.id === id);
    if (sessionIndex === -1) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }

    this.sessions.splice(sessionIndex, 1);
  }
}
