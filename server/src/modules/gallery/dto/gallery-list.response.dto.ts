import { ApiProperty } from '@nestjs/swagger';
import { Character } from 'modules/characters/schemas/character.schema';

export class GalleryListResponseDto {

  @ApiProperty({ default: Character })
  character: Character;

  @ApiProperty({ default: 'black' })
  color: string;

  @ApiProperty({ default: 'XL' })
  size: string;

  @ApiProperty({ default: 39.99 })
  price: number;

  @ApiProperty({ default: 'Unisex' })
  gender: string;

  @ApiProperty({ default: ['black', 'white', 'red'] })
  colors: string[];

  @ApiProperty({ default: ['S', 'M', 'L', 'XL'] })
  sizes: string[];

  constructor(partial: Partial<GalleryListResponseDto>) {
    Object.assign(this, partial);
  }
}
