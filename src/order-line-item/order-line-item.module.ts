import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { orderLineItemProviders } from './order-line-item.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...orderLineItemProviders],
})
export class OrderLineItemModule {}
