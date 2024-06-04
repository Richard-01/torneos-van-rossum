import { IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentDto {
  @ApiProperty({
    description: 'Name of the Tournament',
    example: 'Champions League',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Competition from across the European continent',
    example: 'Champions League 2024',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    description: 'Date of the Tournament',
    example: '2020-06-01',
  })
  @IsDate()
  date: Date;
}
