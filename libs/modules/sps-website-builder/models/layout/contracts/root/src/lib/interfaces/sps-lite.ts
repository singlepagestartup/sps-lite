export const variants = ["default"] as const;

export interface IModel {
  id: string;
  locale: string;
  title: string;
  uid: string | null;
  className: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  variant: (typeof variants)[number];
}
