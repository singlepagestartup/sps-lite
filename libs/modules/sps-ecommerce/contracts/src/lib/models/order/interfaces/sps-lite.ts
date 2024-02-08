export interface IModel {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  status:
    | "cart"
    | "payment"
    | "new"
    | "paid"
    | "canceled"
    | "confirmed"
    | "shipping"
    | "delivered";
  name: string | null;
  email: string | null;
  phone: string | null;
  comment: string | null;
}
