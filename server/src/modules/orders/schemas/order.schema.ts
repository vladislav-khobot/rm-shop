import * as mongoose from 'mongoose';
import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

import { User } from 'modules/auth/schemas/user.schema';
import { Character } from 'modules/characters/schemas/character.schema';
import { SchemaUtils } from 'utils/SchemaUtils/SchemaUtils';

export type OrderDocument = Order & Document;

const MongoTypes = mongoose.Schema.Types;

@Schema({ collection: 'orders' })
export class Order {
  @ApiProperty({ default: '6096ab3a49c9b155f831b465' })
  @Prop({ type: MongoTypes.String, virtual: true })
  id?: string;

  @ApiProperty({ default: User })
  @Prop({ type: MongoTypes.ObjectId, ref: 'User' })
  user: User;

  @ApiProperty({ default: Character })
  @Prop({ type: MongoTypes.ObjectId, ref: 'Character' })
  character: Character;

  @ApiProperty({ default: 'blue' })
  @Prop({ type: MongoTypes.String })
  color: string;

  @ApiProperty({ default: 'XL' })
  @Prop({ type: MongoTypes.String })
  size: string;

  @ApiProperty({ default: 39.99 })
  @Prop({ type: MongoTypes.Number })
  price: number;

  @ApiProperty({ default: 2 })
  @Prop({ type: MongoTypes.Number })
  count: number;

  @ApiProperty({ default: 10 })
  @Prop({ type: MongoTypes.Number })
  discount: number;

  @ApiProperty({ default: 7.99 })
  @Prop({ type: MongoTypes.Number })
  discountValue: number;

  @ApiProperty({ default: 71.99 })
  @Prop({ type: MongoTypes.Number })
  total: number;

  @ApiProperty({ default: '2021-05-11T21:00:00.000+00:00' })
  @Prop({ type: MongoTypes.Date })
  created: Date;
}

export const OrderSchema = SchemaUtils.createSchema(Order);
