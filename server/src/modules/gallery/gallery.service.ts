import { Injectable } from '@nestjs/common';

import { CharactersService } from 'modules/characters/characters.service';
import { ColorsService } from 'modules/colors/colors.service';
import { Color } from 'modules/colors/schemas/color.schema';
import { Size } from 'modules/sizes/schemas/sizes.schema';
import { SizesService } from 'modules/sizes/sizes.service';
import { GalleryListResponseDto } from 'modules/gallery/dto/gallery-list.response.dto';

import { TColor } from 'interfaces/colors';
import { TSize } from 'interfaces/sizes';

@Injectable()
export class GalleryService {
  constructor(
    private colorsService: ColorsService,
    private sizesService: SizesService,
    private charactersService: CharactersService,
  ) {}

  async createIterator(array) {

    function* generator() {
      let i = 0;
      while (true) {
        if (i >= array.length) {
          i = 0;
        }
        yield array[i];
        i++;
      }
    }

    return generator();
  }

  async randomColors(color: TColor, colors: Color[]): Promise<string[]> {
    const subtracts = {
      black: 2,
      white: 1,
      green: 1,
      blue: 2,
      red: 2,
      yellow: 1,
    };
    const subtract = subtracts[color];

    const result = colors
      .filter(item => item.color !== color)
      .slice(0, -subtract)
      .map(item => item.color);

    result.unshift(color);

    return result;
  }

  async randomSizes(size: TSize, sizes: Size[]): Promise<string[]> {
    const subtracts = {
      S: 2,
      M: 1,
      L: 1,
      XL: 2,
      XXL: 2,
    };
    const subtract = subtracts[size];

    const result = sizes
      .filter(item => item.size !== size)
      .slice(0, -subtract)
      .map(item => item.size);

    result.unshift(size);

    return result;
  }

  async list(): Promise<GalleryListResponseDto[]> {

    const characters = await this.charactersService.findAll();
    const colors = await this.colorsService.findAll();
    const sizes = await this.sizesService.findAll();

    const colorsIterator = await this.createIterator(colors);
    const sizesIterator = await this.createIterator(sizes);

    const result: GalleryListResponseDto[] = [];

    for (const character of characters) {
      const { basePrice } = character;
      const { color, weight: colorWeight } = colorsIterator.next().value;
      const { size, weight: sizeWeight } = sizesIterator.next().value;

      const price = basePrice + colorWeight + sizeWeight;

      const availableColors = await this.randomColors(color, colors);
      const availableSizes = await this.randomSizes(size, sizes);

      const item = new GalleryListResponseDto({
        character,
        color,
        size,
        price,
        gender: 'Unisex',
        colors: availableColors,
        sizes: availableSizes,
      });

      result.push(item);
    }

    return result;
  }
}
