export interface IBackendPagination {
  pagination: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
}

declare global {
  interface Window {
    utmReferer?: string | string[];
    offsetWidth: number;
  }

  interface TransformedApiArray<T> extends Array<T> {
    _meta: IBackendPagination;
  }

  const expect: any;
}
