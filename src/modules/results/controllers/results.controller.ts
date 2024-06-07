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
import { ResultsService } from '../services/results.service';
import { CreateResultDto } from '../dto/createResultDto';
import { UpdateResultDto } from '../dto/updateResultDto';

@ApiTags('Results')
@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new result' })
  @ApiCreatedResponse({ description: 'The result has been successfully created'})
  @ApiBadRequestResponse({ description: 'The result could not be created' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultsService.create(createResultDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of results' })
  @ApiOkResponse({ description: 'The results have been successfully retrieved' })
  @ApiBadRequestResponse({ description: 'The results could not be retrieved' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number
  ){
    return this.resultsService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a result' })
  @ApiOkResponse({ description: 'The result has been successfully retrieved' })
  @ApiNotFoundResponse({ description: 'The result could not be retrieved' })
  @ApiBadRequestResponse({ description: 'The result could not be retrieved' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  findOne(@Param('id') id: number) {
    return this.resultsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a result' })
  @ApiOkResponse({ description: 'The result has been successfully updated' })
  @ApiNotFoundResponse({ description: 'The result could not be found' })
  @ApiBadRequestResponse({ description: 'The result could not be updated' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  update(@Param('id') id: number, @Body() updateResultDto: UpdateResultDto) {
    return this.resultsService.update(+id, updateResultDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a result' })
  @ApiOkResponse({ description: 'The result has been successfully deleted' })
  @ApiNotFoundResponse({ description: 'The result could not be found' })
  @ApiBadRequestResponse({ description: 'The result could not be deleted' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  remove(@Param('id') id: number) {
    return this.resultsService.remove(+id);
  }
}
