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
