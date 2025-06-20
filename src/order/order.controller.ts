import { Controller, Get, Inject, Query } from '@nestjs/common';
import { OrderEntity } from './entity/order.entity';
import { OrderService } from './order.service';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject()
    private orderService: OrderService,
  ) {}

  @Get()
  findAll(
    @Query('orderId') orderId: string,
    @Query('minTotalAmount') minTotalAmount: number,
    @Query('maxTotalAmount') maxTotalAmount: number,
  ): Promise<OrderEntity[]> {
    return this.orderService.findAll({
      maxPrice: maxTotalAmount,
      minPrice: minTotalAmount,
      orderId: orderId,
    });
  }
}
