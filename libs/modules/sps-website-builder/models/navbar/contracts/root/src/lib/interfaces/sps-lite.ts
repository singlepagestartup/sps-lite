export const variants = ["default"] as const;

export interface IModel {
  id: string;
  createdAt: string;
  updatedAt: string;
  variant: (typeof variants)[number];
  className: string | null;
}
