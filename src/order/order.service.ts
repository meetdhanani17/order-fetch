import { Inject, Injectable } from '@nestjs/common';
import { OrderEntity } from './entity/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<OrderEntity>,
  ) {}

  findAll({
    maxPrice,
    minPrice,
    orderId,
  }: {
    orderId?: string;
    minPrice?: number;
    maxPrice?: number;
  }): Promise<OrderEntity[]> {
    const where: string[] = [];

    if (orderId) {
      where.push(`order.id = '${orderId.replace("'", '')}'`);
    }

    if (minPrice) {
      // where.push(`order.id = '${orderId.replace("'", '')}'`);
    }

    let preparedQuery = this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.orderItems', 'orderItems')
      .leftJoinAndSelect('orderItems.orderLineItem', 'orderLineItem');

    preparedQuery = preparedQuery.where(where.join(' AND '));

    return preparedQuery.getMany();
    // .where(where.join(' AND '))
    // .getMany();
  }
}
