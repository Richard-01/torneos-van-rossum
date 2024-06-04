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
import { TournamentsService } from '../services/tournaments.service';
import { CreateTournamentDto } from '../dto/createTournamentDto';
import { UpdateTournamentDto } from '../dto/updateTournamentDto';

@ApiTags('Tournaments')
@Controller('tournaments')
export class TournamentsController {
  constructor(private readonly tournamentsService: TournamentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tournament' })
  @ApiCreatedResponse({
    description: 'The tournament has been successfully created',
  })
  @ApiBadRequestResponse({ description: 'The tournament could not be created' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(@Body() createTournamentDto: CreateTournamentDto) {
    return this.tournamentsService.create(createTournamentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of tournaments' })
  @ApiOkResponse({
    description: 'The tournaments have been successfully retrieved',
  })
  @ApiBadRequestResponse({
    description: 'The tournaments could not be retrieved',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
  ) {
    return this.tournamentsService.findAll(page, limit, search);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single tournament' })
  @ApiOkResponse({
    description: 'The tournament has been successfully retrieved',
  })
  @ApiNotFoundResponse({ description: 'The tournament could not be found' })
  @ApiBadRequestResponse({
    description: 'The tournament could not be retrieved',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  findOne(@Param('id') id: number) {
    return this.tournamentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tournament' })
  @ApiOkResponse({
    description: 'The tournament has been successfully updated',
  })
  @ApiNotFoundResponse({ description: 'The tournament could not be found' })
  @ApiBadRequestResponse({ description: 'The tournament could not be updated' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  update(
    @Param('id') id: number,
    @Body() updateTournamentDto: UpdateTournamentDto,
  ) {
    return this.tournamentsService.update(+id, updateTournamentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tournament' })
  @ApiOkResponse({
    description: 'The tournament has been successfully deleted',
  })
  @ApiNotFoundResponse({ description: 'The tournament could not be found' })
  @ApiBadRequestResponse({ description: 'The tournament could not be deleted' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  remove(@Param('id') id: number) {
    return this.tournamentsService.remove(+id);
  }
}
