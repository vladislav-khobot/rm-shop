import { Controller, Get, Post, UseGuards, Req, Body, NotFoundException, ForbiddenException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiOkResponse, ApiBody, ApiBearerAuth } from '@nestjs/swagger';

import { OrdersService } from 'modules/orders/orders.service';
import { Order } from 'modules/orders/schemas/order.schema';
import { OrderCreateRequestDto } from 'modules/orders/dto/order-create.request.dto';

@ApiTags('orders')
@Controller('api/orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('Authorization')
  @ApiOperation({ summary: 'Get all orders by users' })
  @ApiOkResponse({ type: [Order] })
  async list(@Req() req): Promise<Order[]> {
    const userID = req?.user?.id || null;
    if (!userID) {
      throw new NotFoundException('User ID is not defined');
    }

    return this.ordersService.findByUser(userID);
  }

  @Post('')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('Authorization')
  @ApiOperation({ summary: 'Create new order' })
  @ApiBody({ type: OrderCreateRequestDto })
  @ApiOkResponse({ type: Order })
  async create(
    @Req() req,
    @Body() order: OrderCreateRequestDto,
  ): Promise<Order> {
    const userID = req?.user?.id || null;
    if (userID !== order.userID) {
      throw new ForbiddenException('Illegal order creation on behalf of a user');
    }

    return this.ordersService.create(order);
  }
}
