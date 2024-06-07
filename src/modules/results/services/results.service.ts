import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from '../entities/result.entity';
import { CreateResultDto } from '../dto/createResultDto';
import { UpdateResultDto } from '../dto/updateResultDto';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result) private resultRepository: Repository<Result>,
  ) {}

  async create(createResultDto: CreateResultDto): Promise<Result> {
    const result = this.resultRepository.create(createResultDto);
    return this.resultRepository.save(result);
  }

  async findAll(page?: number, limit?: number): Promise<Result[]> {
    const query = this.resultRepository
      .createQueryBuilder('result')
      .leftJoinAndSelect('result.tournament', 'tournament')
      .leftJoinAndSelect('result.winner', 'winner')
      .leftJoinAndSelect('result.loser', 'loser')
      .leftJoinAndSelect('result.player', 'player');

    if (page && limit) {
      query.skip(limit * (page - 1)).take(limit);
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Result> {
    return this.resultRepository.findOne({
      where: { id },
      relations: ['tournament', 'winner', 'loser'],
    });
  }

  async update(id: number, updateResultDto: UpdateResultDto): Promise<Result> {
    await this.resultRepository.update(id, updateResultDto);
    return this.resultRepository.findOne({
      where: { id },
      relations: ['tournament', 'winner', 'loser'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.resultRepository.softDelete(id);
  }
}
