import { RequestOptions } from "https";

export interface IBackendPagination {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

export interface TransformedApiArray<T> extends Array<T> {
  _meta: IBackendPagination;
}

export interface NextRequestOptions extends RequestInit {
  next: {
    revalidate?: number;
    cache?: "force-cache" | "no-store";
    tags?: string[];
  };
}
