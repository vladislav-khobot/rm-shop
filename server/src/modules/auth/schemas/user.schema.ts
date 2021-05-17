import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

import { SchemaUtils } from 'utils/SchemaUtils/SchemaUtils';

export type UserDocument = User & Document;

@Schema({ collection: 'users' })
export class User {
  @ApiProperty({ default: '6096ab3a49c9b155f831b465' })
  @Prop({ virtual: true })
  id?: string;

  @ApiProperty({ default: 'John Doe' })
  @Prop()
  name: string;

  @ApiProperty({ default: 'john.doe@gmail.com' })
  @Prop()
  email: string;

  @ApiProperty({ default: 'https://lh3.googleusercontent.com/a-/john-doe' })
  @Prop()
  avatar: string;

  @ApiProperty({ default: '710738015980494261512' })
  @Prop()
  providerID: string;
}

export const UserSchema = SchemaUtils.createSchema(User);
