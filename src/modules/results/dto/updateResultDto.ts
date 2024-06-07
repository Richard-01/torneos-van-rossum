import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateResultDto } from './createResultDto';

export class UpdateResultDto extends PartialType(CreateResultDto) {
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
