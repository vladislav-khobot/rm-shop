import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { TColor } from 'interfaces/colors';

export type ColorDocument = Color & Document;

@Schema({ collection: 'colors' })
export class Color {
  @Prop()
  color: TColor;

  @Prop()
  weight: number;
}

export const ColorSchema = SchemaFactory.createForClass(Color);
