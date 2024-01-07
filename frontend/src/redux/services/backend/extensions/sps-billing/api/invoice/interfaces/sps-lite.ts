export interface IEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  amount: number;
  status: "new" | "pending" | "success" | "failed";
  paymentUrl: string | null;
}
