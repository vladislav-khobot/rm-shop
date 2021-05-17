import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { GalleryService } from 'modules/gallery/gallery.service';
import { GalleryListResponseDto } from 'modules/gallery/dto/gallery-list.response.dto';

@ApiTags('gallery')
@Controller('api/gallery')
export class GalleryController {
  constructor(private galleryService: GalleryService) {}

  @Get('')
  @ApiOperation({ summary: 'Get gallery' })
  @ApiOkResponse({ type: [GalleryListResponseDto]})
  async list(): Promise<GalleryListResponseDto[]> {
    return this.galleryService.list();
  }
}
