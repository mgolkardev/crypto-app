export interface TablePaginationProperties {
  total: number;
  page: number;
  perPage: number;
  onChange?: (page: number) => void;
}
