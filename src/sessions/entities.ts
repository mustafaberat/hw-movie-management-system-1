import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  timeSlot: string;

  @Column()
  roomNumber: number;

  @Column()
  movieId: number;
}
