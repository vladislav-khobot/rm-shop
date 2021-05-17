import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

import { TColor } from 'interfaces/colors';
import { SchemaUtils } from 'utils/SchemaUtils/SchemaUtils';

export type ColorDocument = Color & Document;

@Schema({ collection: 'colors' })
export class Color {
  @ApiProperty({ default: '6096ab3a49c9b155f831b465' })
  @Prop({ virtual: true })
  id: string;

  @ApiProperty({ default: 'black' })
  @Prop()
  color: TColor;

  @ApiProperty({ default: 2 })
  @Prop()
  weight: number;
}

export const ColorSchema = SchemaUtils.createSchema(Color);
