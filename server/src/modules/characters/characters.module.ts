import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CharactersController } from 'modules/characters/characters.controller';
import { CharactersService } from 'modules/characters/characters.service';
import { Character, CharacterSchema } from 'modules/characters/schemas/character.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Character.name,
      schema: CharacterSchema,
    }]),
  ],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule {}
