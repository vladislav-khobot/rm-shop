import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Color, ColorDocument } from 'modules/colors/schemas/color.schema';

@Injectable()
export class ColorsService {
  constructor(
    @InjectModel(Color.name) private colorModel: Model<ColorDocument>
  ) {}

  async findAll(): Promise<Color[]> {
    return this.colorModel.find().exec();
  }
}
