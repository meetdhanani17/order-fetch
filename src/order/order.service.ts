import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { OrderEntity } from './entity/order.entity';
import { Repository } from 'typeorm';
import { PaginationResponse } from 'src/common/paginationResponse.type';
import { ApiResponse } from 'src/common/apiResponse.types';
import { FindOrderRequestDto } from './dto/find.order.request.dto';

@Injectable()
export class OrderService {
  constructor(
    @Inject('ORDER_REPOSITORY')
    private orderRepository: Repository<OrderEntity>,
  ) {}

  async findOrders({
    maxTotalAmount,
    minTotalAmount,
    orderId,
    limit = 10,
    page = 1,
  }: FindOrderRequestDto): Promise<PaginationResponse<OrderEntity>> {
    const whereConditions: string[] = [];

    if (orderId) {
      whereConditions.push(`order.id = '${orderId.replace("'", '')}'`);
    }

    if (minTotalAmount) {
      if (isNaN(minTotalAmount)) {
        throw new BadRequestException('minTotalAmount must be a number');
      }
      if (minTotalAmount < 0) {
        throw new BadRequestException('minTotalAmount cannot be negative');
      }
      whereConditions.push(`paymentCollection.amount >= ${minTotalAmount}`);
    }

    if (maxTotalAmount) {
      if (isNaN(maxTotalAmount)) {
        throw new BadRequestException('maxTotalAmount must be a number');
      }
      if (maxTotalAmount < 0) {
        throw new BadRequestException('maxTotalAmount cannot be negative');
      }
      if (minTotalAmount && minTotalAmount > maxTotalAmount) {
        throw new BadRequestException(
          'maxTotalAmount should be greater or equal to minTotalAmount',
        );
      }

      whereConditions.push(`paymentCollection.amount <= ${maxTotalAmount}`);
    }

    let preparedQuery = this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.orderItems', 'orderItems')
      .leftJoinAndSelect('orderItems.orderLineItem', 'orderLineItem')
      .leftJoinAndSelect(
        'order.orderPaymentCollections',
        'orderPaymentCollections',
      )
      .leftJoinAndSelect(
        'orderPaymentCollections.paymentCollection',
        'paymentCollection',
      );

    if (whereConditions.length) {
      preparedQuery = preparedQuery.where(whereConditions.join(' AND '));
    }

    const totalRecordsPromise = preparedQuery.getCount();
    preparedQuery = preparedQuery.take(limit).skip((page - 1) * limit);

    const [totalRecords, records] = await Promise.all([
      totalRecordsPromise,
      preparedQuery.getMany(),
    ]);

    return {
      docs: records,
      limit: limit,
      page: page,
      totalPages: Math.ceil(totalRecords / limit),
      totalCount: totalRecords,
    };
  }

  async fetchAll(
    obj: FindOrderRequestDto,
  ): Promise<ApiResponse<PaginationResponse<OrderEntity>>> {
    return {
      data: await this.findOrders(obj),
      message: 'records fetch successfully',
    };
  }

  async fetchByOrderId({
    orderId,
  }: {
    orderId: string;
  }): Promise<ApiResponse<OrderEntity | null>> {
    const orderRecord = await this.findOrders({
      orderId: orderId,
    });

    if (orderRecord.totalCount) {
      return {
        data: orderRecord.docs[0],
        message: 'Record fetch successfully',
      };
    }
    return {
      data: null,
      message: 'No records found',
    };
  }
}
