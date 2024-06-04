import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateTournamentDto } from '../../tournaments/dto/createTournamentDto';

export class UpdateTournamentDto extends PartialType(CreateTournamentDto) {
  @ApiPropertyOptional({
    description: 'Name of the Tournament (optional)',
    example: 'SuperCup the Spain',
  })
  name?: string;

  @ApiPropertyOptional({
    description: 'Super Cup of Spain Competition (optional)',
    example: 'SuperCup the Spain 2024',
  })
  description?: string;

  @ApiPropertyOptional({
    description: 'The tournament starts at...  (optional)',
    example: '2024-01-14',
  })
  date?: Date;
}
