import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Size, SizeDocument } from 'modules/sizes/schemas/sizes.schema';

@Injectable()
export class SizesService {
  constructor(
    @InjectModel(Size.name) private sizeModel: Model<SizeDocument>
  ) {}

  async findAll(): Promise<Size[]> {
    return this.sizeModel.find().exec();
  }
}
