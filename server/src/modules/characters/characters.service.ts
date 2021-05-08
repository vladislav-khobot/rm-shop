import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Character, CharacterDocument } from 'modules/characters/schemas/character.schema';

@Injectable()
export class CharactersService {

  constructor(
    @InjectModel(Character.name) private characterModel: Model<CharacterDocument>
  ) {}

  async findAll(): Promise<Character[]> {
    return this.characterModel.find().exec();
  }
}
