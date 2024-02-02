export interface IModel {
  id: number;
  locale: string;
  title: string;
  description: string;
  script?: string | null;
  uid: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
