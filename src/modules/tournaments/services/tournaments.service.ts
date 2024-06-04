import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from '../entities/tournament.entity';
import { CreateTournamentDto } from '../dto/createTournamentDto';
import { UpdateTournamentDto } from '../dto/updateTournamentDto';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectRepository(Tournament)
    private tournamentRepository: Repository<Tournament>,
  ) {}

  async create(createTournamentDto: CreateTournamentDto): Promise<Tournament> {
    const tournament = this.tournamentRepository.create(createTournamentDto);
    return this.tournamentRepository.save(tournament);
  }

  async findAll(
    page?: number,
    limit?: number,
    search?: string,
  ): Promise<Tournament[]> {
    const query = this.tournamentRepository.createQueryBuilder('tournament');
    query.leftJoinAndSelect('tournament.players', 'players');

    if (search) {
      query.andWhere('tournament.name LIKE :name', { name: `%${search}%` });
    }

    if (page && limit) {
      query.skip(limit * (page - 1)).take(limit);
    }

    query.orderBy('tournament.name', 'ASC');

    return query.getMany();
  }

  async findOne(id: number): Promise<Tournament> {
    return this.tournamentRepository.findOne({
      where: { id },
      relations: ['players'],
    });
  }

  async update(
    id: number,
    updateTournamentDto: UpdateTournamentDto,
  ): Promise<Tournament> {
    await this.tournamentRepository.update(id, updateTournamentDto);
    return this.tournamentRepository.findOne({
      where: { id },
      relations: ['players'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.tournamentRepository.softDelete(id);
  }
}
