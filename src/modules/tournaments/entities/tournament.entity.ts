import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Player } from '../../players/entities/player.entity';
import { Result } from '../../results/entities/result.entity';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  date: Date;

  @ManyToMany(() => Player)
  @JoinTable()
  players: Player[];

  @OneToMany(() => Result, result => result.tournament)
  results: Result[];
}
