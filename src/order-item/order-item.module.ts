import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { orderItemProviders } from './order-item.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...orderItemProviders],
})
export class OrderItemModule {}
