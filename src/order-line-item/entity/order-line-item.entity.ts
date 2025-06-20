import { OrderItemEntity } from 'src/order-item/entity/order-item.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity({ name: 'order_line_item' })
export class OrderLineItemEntity {
  @PrimaryColumn({ nullable: false, type: 'text' })
  id: string;

  @Column({ type: 'text' })
  totals_id: string;

  @Column({ type: 'text', nullable: true })
  title: string;

  @Column({ type: 'text', nullable: true })
  subtitle: string;

  @Column({ type: 'text', nullable: true })
  thumbnail: string;

  @Column({ type: 'text', nullable: true })
  variant_id: string;

  @Column({ type: 'text', nullable: true })
  product_id: string;

  @Column({ type: 'text', nullable: true })
  product_title: string;

  @Column({ type: 'text', nullable: true })
  product_description: string;

  @Column({ type: 'text', nullable: true })
  product_subtitle: string;

  @Column({ type: 'text', nullable: true })
  product_type: string;

  @Column({ type: 'text', nullable: true })
  product_collection: string;

  @Column({ type: 'text', nullable: true })
  product_handle: string;

  @Column({ type: 'text', nullable: true })
  variant_sku: string;

  @Column({ type: 'text', nullable: true })
  variant_barcode: string;

  @Column({ type: 'text', nullable: true })
  variant_title: string;

  @Column({ type: 'jsonb', nullable: false })
  variant_option_values: any;

  @Column()
  requires_shipping: boolean;

  @Column()
  is_discountable: boolean;

  @Column()
  is_tax_inclusive: boolean;

  @Column({ type: 'numeric' })
  compare_at_unit_price: number;

  @Column({ type: 'jsonb' })
  raw_compare_at_unit_price: any;

  @Column({ type: 'numeric' })
  unit_price: number;

  @Column({ type: 'jsonb' })
  raw_unit_price: any;

  @Column({ type: 'jsonb' })
  metadata: any;

  @Column({ type: 'timestamptz', nullable: false })
  created_at: Date;

  @Column({ type: 'timestamptz', nullable: false })
  updated_at: Date;

  @Column({ type: 'timestamptz' })
  deleted_at: Date;

  @Column({ type: 'timestamptz' })
  is_custom_price: boolean;

  @Column({ type: 'text', nullable: true })
  product_type_id: string;

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.orderLineItem)
  orderItems: OrderItemEntity[];
}
