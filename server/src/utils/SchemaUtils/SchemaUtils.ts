import { SchemaFactory } from '@nestjs/mongoose';

export class SchemaUtils {

  static createSchema(schemaClass) {
    const schema = SchemaFactory.createForClass(schemaClass);
    schema.set('toJSON', {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
      }
    });

    return schema;
  }
}
