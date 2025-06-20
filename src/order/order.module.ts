import { Module } from '@nestjs/common';
import { OrdersController } from './order.controller';
import { OrderService } from './order.service';
import { orderProviders } from './order.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [...orderProviders, OrderService],
})
export class OrderModule {}
