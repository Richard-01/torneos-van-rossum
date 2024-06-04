import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  ManyToOne,
  DeleteDateColumn 
} from 'typeorm';
import { Player } from '../../players/entities/player.entity';
import { Tournament } from '../../tournaments/entities/tournament.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Tournament, (tournament) => tournament.results)
  tournament: Tournament;

  @ManyToOne(() => Player, (player) => player.results)
  player: Player;

  @ManyToOne(() => Player)
  winner: Player;

  @ManyToOne(() => Player)
  loser: Player;

  @Column()
  winnerScore: number;

  @Column()
  loserScore: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
