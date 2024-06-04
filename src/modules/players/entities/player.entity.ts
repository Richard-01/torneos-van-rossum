import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Tournament } from '../../tournaments/entities/tournament.entity';


@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @ManyToMany(() => Tournament, tournament => tournament.players)
    tournaments: Tournament[];

}