import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, DeleteDateColumn, OneToMany } from 'typeorm';
import { Tournament } from '../../tournaments/entities/tournament.entity';
import { Result } from 'src/modules/results/entities/result.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  shirtNumber: number;

  @ManyToMany(() => Tournament, (tournament) => tournament.players)
  tournaments: Tournament[];

  @OneToMany(() => Result, (result) => result.player)
  results: Result[];

  @DeleteDateColumn()
  deletedAt: Date;
}
