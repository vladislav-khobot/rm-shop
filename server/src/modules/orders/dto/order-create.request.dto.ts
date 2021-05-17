import { ApiProperty } from '@nestjs/swagger';

export class OrderCreateRequestDto {

  @ApiProperty({ default: '6096ab3a49c9b155f831b465' })
  userID: string;

  @ApiProperty({ default: '4213ab3a49c9b155f831c521' })
  characterID: string;

  @ApiProperty({ default: 'blue' })
  color: string;

  @ApiProperty({ default: 'XL' })
  size: string;

  @ApiProperty({ default: 39.99 })
  price: number;

  @ApiProperty({ default: 2 })
  count: number;

  @ApiProperty({ default: 10 })
  discount: number;

  @ApiProperty({ default: 7.99 })
  discountValue: number;

  @ApiProperty({ default: 71.99 })
  total: number;

  @ApiProperty({ default: '2021-05-11T21:00:00.000+00:00' })
  created: Date;
}
