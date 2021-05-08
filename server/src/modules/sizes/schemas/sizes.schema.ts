import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

import { TSize } from 'interfaces/sizes';
import { SchemaUtils } from 'utils/SchemaUtils/SchemaUtils';

export type SizeDocument = Size & Document;

@Schema({ collection: 'sizes' })
export class Size {
  @ApiProperty({ default: '6096aada49c9b155f831b465' })
  @Prop({ virtual: true })
  id: string;

  @ApiProperty({ default: 'XL' })
  @Prop()
  size: TSize;

  @ApiProperty({ default: 2 })
  @Prop()
  weight: number;
}

export const SizesSchema = SchemaUtils.createSchema(Size);
