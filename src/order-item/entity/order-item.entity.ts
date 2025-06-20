import { OrderLineItemEntity } from 'src/order-line-item/entity/order-line-item.entity';
import { OrderEntity } from 'src/order/entity/order.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'order_item' })
export class OrderItemEntity {
  @PrimaryColumn({ nullable: false, type: 'text' })
  id: string;

  @Column({ nullable: false })
  order_id: string;

  @ManyToOne(() => OrderEntity, (order) => order.orderItems)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;

  @Column()
  version: number;

  @Column({ nullable: false })
  item_id: string;

  @ManyToOne(() => OrderLineItemEntity, (olie) => olie.orderItems)
  @JoinColumn({ name: 'item_id' })
  orderLineItem: OrderLineItemEntity;

  @Column()
  quantity: number;

  @Column({ type: 'jsonb' })
  raw_quantity: any;

  @Column({ type: 'numeric' })
  fulfilled_quantity: number;

  @Column({ type: 'jsonb' })
  raw_fulfilled_quantity: any;

  @Column({ type: 'numeric' })
  shipped_quantity: number;

  @Column({ type: 'jsonb' })
  raw_shipped_quantity: any;

  @Column({ type: 'numeric' })
  return_requested_quantity: number;

  @Column({ type: 'jsonb' })
  raw_return_requested_quantity: any;

  @Column({ type: 'numeric', nullable: false })
  return_received_quantity: number;

  @Column({ type: 'jsonb', nullable: true })
  raw_return_received_quantity: any;

  @Column({ type: 'numeric', nullable: false })
  return_dismissed_quantity: number;

  @Column({ type: 'jsonb', nullable: true })
  raw_return_dismissed_quantity: string;

  @Column()
  written_off_quantity: string;

  @Column({ type: 'jsonb', nullable: true })
  raw_written_off_quantity: any;

  @Column({ type: 'jsonb', nullable: true })
  metadata: any;

  @Column({ type: 'timestamptz', nullable: false })
  created_at: Date;

  @Column({ type: 'timestamptz', nullable: false })
  updated_at: Date;

  @Column({ type: 'timestamptz' })
  deleted_at: Date;

  @Column({ type: 'numeric', nullable: false })
  delivered_quantity: number;

  @Column({ type: 'jsonb', nullable: false })
  raw_delivered_quantity: any;

  @Column({ type: 'numeric', nullable: true })
  unit_price: number;

  @Column({ type: 'jsonb', nullable: true })
  raw_unit_price: any;

  @Column({ type: 'numeric', nullable: true })
  compare_at_unit_price: number;

  @Column({ type: 'numeric', nullable: true })
  raw_compare_at_unit_price: any;
}
