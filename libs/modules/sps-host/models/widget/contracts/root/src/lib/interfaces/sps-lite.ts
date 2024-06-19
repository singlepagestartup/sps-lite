export const variants = ["default"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  title?: string;
  className?: string;
  orderIndex: number;
}
