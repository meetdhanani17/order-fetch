import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OrderLineItemModule } from './order-line-item/order-line-item.module';
import { OrderPaymentCollectionModule } from './order-payment-collection/order-payment-collection.module';
import { PaymentCollectionModule } from './payment-collection/payment-collection.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes it available globally
    }),
    DatabaseModule,
    OrderModule,
    OrderItemModule,
    OrderLineItemModule,
    OrderPaymentCollectionModule,
    PaymentCollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
