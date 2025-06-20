import {
  Controller,
  DefaultValuePipe,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { OrderEntity } from './entity/order.entity';
import { OrderService } from './order.service';
import { PaginationResponse } from 'src/common/paginationResponse.type';
import { ApiResponse } from 'src/common/apiResponse.types';

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
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: number,
  ): Promise<ApiResponse<PaginationResponse<OrderEntity>>> {
    return this.orderService.fetchAll({
      maxTotalAmount: maxTotalAmount,
      minTotalAmount: minTotalAmount,
      orderId: orderId,
      page,
      limit,
    });
  }

  @Get(':orderId')
  findOne(
    @Param('orderId') orderId: string,
  ): Promise<ApiResponse<OrderEntity | null>> {
    return this.orderService.fetchByOrderId({
      orderId: orderId,
    });
  }
}
