import { Module } from '@nestjs/common';
import { ResultsService } from './services/results.service';
import { ResultsController } from './controllers/results.controller';
import { Result } from './entities/result.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  controllers: [ResultsController],
  providers: [ResultsService]
})
export class ResultsModule {}
