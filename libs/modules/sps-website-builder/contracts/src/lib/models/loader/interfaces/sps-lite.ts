export interface IModel {
  id: number;
  locale: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  className: string | null;
  anchor: string | null;
  variant: "simple";
}
