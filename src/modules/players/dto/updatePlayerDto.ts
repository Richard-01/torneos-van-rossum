import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreatePlayerDto } from '../dto/createPlayerDto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  @ApiPropertyOptional({
    description: 'Player name (Optinal)',
    example: 'Richardson',
  })
  name?: string;

  @ApiPropertyOptional({
    description: 'Player Last Name (Optinal)',
    example: 'Betancourt',
  })
  lastName?: string;

  @ApiPropertyOptional({
    description: 'Player Shirt Number (Optinal)',
    example: 12,
  })
  shirtNumber?: number;
}
