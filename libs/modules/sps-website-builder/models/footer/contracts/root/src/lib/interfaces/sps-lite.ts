export const variants = ["default"] as const;

export interface IModel {
  id: string;
  createdAt: string;
  updatedAt: string;
  variant: (typeof variants)[number];
  title: string;
  className: string | null;
}
