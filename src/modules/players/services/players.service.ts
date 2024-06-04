import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';
import { CreatePlayerDto } from '../dto/createPlayerDto';
import { UpdatePlayerDto } from '../dto/updatePlayerDto';

@Injectable()
export class PlayersService {
    constructor(@InjectRepository(Player) private playerRepository: Repository<Player>) {}

    async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
        const player = this.playerRepository.create(createPlayerDto);
        return this.playerRepository.save(player);
    }

    async findAll(
        page?: number,
        limit?: number,
        search?: string
    ): Promise<Player[]> {
        const query = this.playerRepository.createQueryBuilder('player')
            .leftJoinAndSelect('player.tournaments', 'tournaments');

        if (search) {
            query.andWhere('player.name LIKE :name', { name: `%${search}%` });
        }

        if (page && limit) {
            query.skip(limit * (page - 1)).take(limit);
        }

        query.orderBy('player.name', 'ASC')

        return query.getMany();
    }

    async findOne(id: number): Promise<Player> {
        return this.playerRepository.findOne({
            where: { id },
            relations: ['tournaments'],
        });
    }

    async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
        await this.playerRepository.update(id, updatePlayerDto);
        return this.playerRepository.findOne({
            where: { id },
            relations: ['tournaments'],
        })
    }

    async remove(id: number): Promise<void> {
        await this.playerRepository.softDelete(id);
    }

}
