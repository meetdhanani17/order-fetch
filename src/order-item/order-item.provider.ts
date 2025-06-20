import { DataSource } from 'typeorm';
import { OrderItemEntity } from './entity/order-item.entity';

export const orderItemProviders = [
  {
    provide: 'ORDER_ITEM_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(OrderItemEntity),
    inject: ['DATA_SOURCE'],
  },
];
