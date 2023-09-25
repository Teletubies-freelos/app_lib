export interface PaginatedParams {
  limit?: number;
  offset?: number;
}

export interface Filters {
  price?: number;
  name?: string;
  platform?: string;
  genre?: string;
  order?: string;
}

export interface SearchParams {
  filters?: Filters;
  paginated?: PaginatedParams;
}
