import { Module } from '@nestjs/common';
import { PlayersController } from './controllers/players.controller';
import { PlayersService } from './services/players.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../players/entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  controllers: [PlayersController],
  providers: [PlayersService]
})
export class PlayersModule {}
