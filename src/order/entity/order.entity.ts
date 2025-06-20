import { OrderItemEntity } from 'src/order-item/entity/order-item.entity';
import { OrderPaymentCollectionEntity } from 'src/order-payment-collection/entity/order-payment-collection.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity({ name: 'order' })
export class OrderEntity {
  @PrimaryColumn({ nullable: false, type: 'text' })
  id: string;

  @Column({ nullable: true })
  region_id: string;

  @Column({ nullable: true })
  display_id: number;

  @Column()
  customer_id: string;

  @Column()
  version: number;

  @Column()
  sales_channel_id: string;

  @Column()
  status: string;

  @Column()
  is_draft_order: boolean;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  currency_code: string;

  @Column({ type: 'text' })
  shipping_address_id: string;

  @Column({ type: 'text' })
  billing_address_id: string;

  @Column()
  no_notification: boolean;

  @Column({ type: 'jsonb' })
  metadata: any;

  @Column({ type: 'timestamptz' })
  created_at: Date;

  @Column({ type: 'timestamptz' })
  updated_at: Date;

  @Column({ type: 'timestamptz' })
  deleted_at: Date;

  @Column({ type: 'timestamptz' })
  canceled_at: Date;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  orderItems: OrderItemEntity[];

  @OneToMany(() => OrderPaymentCollectionEntity, (opc) => opc.order)
  orderPaymentCollections: OrderPaymentCollectionEntity[];
}
