export const variants = ["default"] as const;

export interface IModel {
  id: string;
  title: string;
  className: string | null;
  variant: (typeof variants)[number];
  createdAt: string;
  updatedAt: string;
}
