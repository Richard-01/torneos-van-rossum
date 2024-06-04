import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PlayersService } from '../services/players.service';
import { CreatePlayerDto } from '../dto/createPlayerDto';
import { UpdatePlayerDto } from '../dto/updatePlayerDto';


@ApiTags('Players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new player' })
  @ApiCreatedResponse({ description: 'The player has been successfully created' })
  @ApiBadRequestResponse({ description: 'The player could not be created' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(@Body() createPlayerDto: CreatePlayerDto) {
      return this.playersService.create(createPlayerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of players' })
  @ApiOkResponse({ description: 'The players have been successfully retrieved' })
  @ApiBadRequestResponse({ description: 'The players could not be retrieved' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
      return this.playersService.findAll(page, limit, search);
  }


  @Get(':id')
  @ApiOperation({ summary: 'Get a single player' })
  @ApiOkResponse({ description: 'The player has been successfully retrieved' })
  @ApiNotFoundResponse({ description: 'The player could not be found' })
  @ApiBadRequestResponse({ description: 'The player could not be retrieved' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  findOne(@Param('id') id: number) {
      return this.playersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a player' })
  @ApiOkResponse({ description: 'The player has been successfully updated' })
  @ApiNotFoundResponse({ description: 'The player could not be found' })
  @ApiBadRequestResponse({ description: 'The player could not be updated' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  update(@Param('id') id: number, @Body() updatePlayerDto: UpdatePlayerDto) {
      return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a player' })
  @ApiOkResponse({ description: 'The player has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'The player could not be found' })
  @ApiBadRequestResponse({ description: 'The player could not be deleted' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  remove(@Param('id') id: number) {
      return this.playersService.remove(+id);
  }
}
