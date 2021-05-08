import { Model } from 'mongoose';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Color, ColorDocument } from 'modules/colors/schemas/color.schema';
import { initColors } from 'modules/colors/init/colors.init';

@Injectable()
export class ColorsService {

  logger = new Logger(ColorsService.name);

  constructor(
    @InjectModel(Color.name) private colorModel: Model<ColorDocument>
  ) {}

  async init(): Promise<void> {
    const colors = await this.findAll();
    if (colors.length > 0) {
      return;
    }

    try {
      for (let color of initColors) {
        const colorModel = new this.colorModel(color);
        await colorModel.save();
      }

    } catch (e: unknown) {
      const error = new Error('Unable to init Colors collection');
      this.logger.error(error);
      this.logger.error(e);

      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Color[]> {
    return this.colorModel.find().exec();
  }
}
