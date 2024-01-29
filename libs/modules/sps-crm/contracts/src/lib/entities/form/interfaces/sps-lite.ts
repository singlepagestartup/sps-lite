export interface IEntity {
  id: number;
  variant: "simple";
  locale: string;
  title: string;
  uid: string;
  className: string | null;
  additionalAttributes: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
