export interface IModel {
  id: number;
  title: string | null;
  description: string | null;
  period: number | null;
  type: "one-time" | "regularly";
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
