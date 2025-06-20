import { OrderPaymentCollectionEntity } from 'src/order-payment-collection/entity/order-payment-collection.entity';
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';

@Entity({ name: 'payment_collection' })
export class PaymentCollectionEntity {
  @PrimaryColumn({ nullable: false, type: 'text' })
  id: string;

  @Column({ nullable: true })
  currency_code: string;

  @Column({ nullable: true })
  amount: number;

  @Column({ type: 'jsonb' })
  raw_amount: any;

  @Column({ nullable: true })
  authorized_amount: number;

  @Column({ type: 'jsonb' })
  raw_authorized_amount: any;

  @Column({ nullable: true })
  captured_amount: number;

  @Column({ type: 'jsonb', nullable: true })
  raw_captured_amount: any;

  @Column({ nullable: true })
  refunded_amount: number;

  @Column({ type: 'jsonb', nullable: true })
  raw_refunded_amount: any;

  @Column({ type: 'timestamptz' })
  created_at: Date;

  @Column({ type: 'timestamptz' })
  updated_at: Date;

  @Column({ type: 'timestamptz' })
  deleted_at: Date;

  @Column({ type: 'timestamptz' })
  completed_at: Date;

  @Column({ nullable: true })
  status: string;

  @Column({ type: 'jsonb', nullable: true })
  metadata: any;

  @OneToMany(() => OrderPaymentCollectionEntity, (opc) => opc.order)
  orderPaymentCollections: OrderPaymentCollectionEntity[];
}
