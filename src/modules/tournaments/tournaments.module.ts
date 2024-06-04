import { Module } from '@nestjs/common';
import { TournamentsService } from './services/tournaments.service';
import { TournamentsController } from './controllers/tournaments.controller';

@Module({
  providers: [TournamentsService],
  controllers: [TournamentsController]
})
export class TournamentsModule {}
