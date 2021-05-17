import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { CharactersService } from 'modules/characters/characters.service';
import { Character } from 'modules/characters/schemas/character.schema';

@ApiTags('characters')
@Controller('api/characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) {}

  @Get('')
  @ApiOperation({ summary: 'Get all available characters' })
  @ApiOkResponse({ type: [Character] })
  async list(): Promise<Character[]> {
    return this.charactersService.findAll();
  }
}
