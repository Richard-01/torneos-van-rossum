import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreatePlayerDto } from './createResultDto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  @ApiPropertyOptional({
    description: 'Score of the winning player (optional)',
    example: 25,
  })
  winnerScore?: number;

  @ApiPropertyOptional({
    description: 'Score of the losing player (optional)',
    example: 15,
  })
  loserScore?: number;
}
