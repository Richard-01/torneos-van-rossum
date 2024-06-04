import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty({
    description: 'Name of the Player',
    example: 'Richard',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Last Name of the Player',
    example: 'Montoya',
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Shirt Number of the Player',
    example: 10,
  })
  @IsNotEmpty()
  shirtNumber: number;
}
