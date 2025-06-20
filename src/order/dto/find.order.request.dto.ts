export interface FindOrderRequestDto {
  orderId?: string;
  minTotalAmount?: number;
  maxTotalAmount?: number;
  page?: number;
  limit?: number;
}
