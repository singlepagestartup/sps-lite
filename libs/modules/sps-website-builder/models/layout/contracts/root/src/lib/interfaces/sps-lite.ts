export const variants = ["default", "wide", "boxed"] as const;

export interface IModel {
  id: number;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: (typeof variants)[number];
}

// "admin-select-input", "admin-table-row", "admin-table", "admin-panel", "admin-form", "default", "find", "page-attacher", "editor", "wide", "boxed"
