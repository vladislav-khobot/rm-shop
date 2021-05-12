import { SchemaFactory } from '@nestjs/mongoose';

export class SchemaUtils {

  static createSchema(schemaClass) {
    const schema = SchemaFactory.createForClass(schemaClass);
    schema.set('toJSON', {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id.toHexString();
        delete ret._id;
        delete ret.__v;
      }
    });

    return schema;
  }
}
