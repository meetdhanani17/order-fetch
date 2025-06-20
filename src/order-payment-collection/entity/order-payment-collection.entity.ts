import { OrderItemEntity } from 'src/order-item/entity/order-item.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity({ name: 'order' })
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

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  orderItems: OrderItemEntity[];
}
