import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateResultDto {
  @ApiProperty({
    description: 'Score of the winning player',
    example: 25,
  })
  @IsNotEmpty()
  winnerScore: number;

  @ApiProperty({
    description: 'Score of the losing player',
    example: 15,
  })
  @IsNotEmpty()
  loserScore: number;
}
