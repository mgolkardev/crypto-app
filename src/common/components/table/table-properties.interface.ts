import React from "react";
import { TablePaginationProperties } from "./components/table-pagination-properties.interface";

export interface TableColumn {
  title: React.ReactNode;
  name: string;
  type?: "text" | "number" | "currency";
  className?: string;
  render?: (record: any, index: number) => React.ReactNode;
}

export interface TableProperties {
  columns: TableColumn[];
  data?: any[];
  isLoading?: boolean;
  pagination?: TablePaginationProperties;
  className?: string;
}
