import { Module } from '@nestjs/common';
import { TournamentsService } from './services/tournaments.service';
import { TournamentsController } from './controllers/tournaments.controller';
import { Tournament } from './entities/tournament.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  providers: [TournamentsService],
  controllers: [TournamentsController]
})
export class TournamentsModule {}
