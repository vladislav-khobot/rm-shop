import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

import { TColor } from 'interfaces/colors';

export type ColorDocument = Color & Document;

@Schema({ collection: 'colors' })
export class Color {
  @ApiProperty({ default: 'black' })
  @Prop()
  color: TColor;

  @ApiProperty({ default: 2 })
  @Prop()
  weight: number;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
