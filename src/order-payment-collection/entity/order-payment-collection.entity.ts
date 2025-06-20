import { OrderEntity } from 'src/order/entity/order.entity';
import { PaymentCollectionEntity } from 'src/payment-collection/entity/payment-collection.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'order_payment_collection' })
export class OrderPaymentCollectionEntity {
  @PrimaryColumn({ nullable: false, type: 'text' })
  order_id: string;

  @Column({ nullable: true })
  payment_collection_id: string;

  @Column({ nullable: true })
  id: number;

  @Column({ type: 'timestamptz' })
  created_at: Date;

  @Column({ type: 'timestamptz' })
  updated_at: Date;

  @Column({ type: 'timestamptz' })
  deleted_at: Date;

  @ManyToOne(() => OrderEntity, (order) => order.orderPaymentCollections)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @ManyToOne(
    () => PaymentCollectionEntity,
    (paymentCollection) => paymentCollection.orderPaymentCollections,
  )
  @JoinColumn({ name: 'payment_collection_id' })
  paymentCollection: PaymentCollectionEntity;
}
