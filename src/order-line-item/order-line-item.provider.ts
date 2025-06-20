import { DataSource } from 'typeorm';
import { OrderLineItemEntity } from './entity/order-line-item.entity';

export const orderLineItemProviders = [
  {
    provide: 'ORDER_LINE_ITEM_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(OrderLineItemEntity),
    inject: ['DATA_SOURCE'],
  },
];
