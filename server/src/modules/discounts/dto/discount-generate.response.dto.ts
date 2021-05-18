import { ApiProperty } from '@nestjs/swagger';

export class DiscountGenerateResponseDto {

  @ApiProperty({ default: 10 })
  discount: number;
}
