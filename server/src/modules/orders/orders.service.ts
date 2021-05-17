import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { AuthService } from 'modules/auth/auth.service';
import { CharactersService } from 'modules/characters/characters.service';
import { OrderCreateRequestDto } from 'modules/orders/dto/order-create.request.dto';
import { Order, OrderDocument } from 'modules/orders/schemas/order.schema';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private authService: AuthService,
    private charactersService: CharactersService,
  ) {}

  async findByUser(userID: string): Promise<Order[]> {
    const user = await this.authService.findUserByID(userID);
    return this.orderModel
      .find({ user })
      .populate('user')
      .populate('character')
      .exec();
  }

  async create(order: OrderCreateRequestDto): Promise<Order> {
    const { userID, characterID } = order;

    const user = await this.authService.findUserByID(userID);
    const character = await this.charactersService.findByID(characterID);

    const result = await this.orderModel.create({
      ...order,
      user,
      character,
    });

    return result;
  }
}
