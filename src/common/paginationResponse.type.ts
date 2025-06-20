export interface PaginationResponse<T> {
  docs: T[];
  limit: number;
  page: number;
  totalPages: number;
  totalCount: number;
}
