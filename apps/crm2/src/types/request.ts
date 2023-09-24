export interface PaginationParams {
  offset?: number;
  limit?: number;
}


export interface QueryManyOptions {
  pagination?: PaginationParams;
  filters?: unknown
}
