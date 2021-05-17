import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

import { SchemaUtils } from 'utils/SchemaUtils/SchemaUtils';

export type CharacterDocument = Character & Document;

@Schema({ collection: 'characters' })
export class Character {
  @ApiProperty({ default: '6096ab3a49c9b155f831b465' })
  @Prop({ virtual: true })
  id: string;

  @ApiProperty({ default: 'Rick Sanchez' })
  @Prop()
  name: string;

  @ApiProperty({ default: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' })
  @Prop()
  image: string;

  @ApiProperty({ default: 39.99 })
  @Prop()
  basePrice: number;
}

export const CharacterSchema = SchemaUtils.createSchema(Character);
