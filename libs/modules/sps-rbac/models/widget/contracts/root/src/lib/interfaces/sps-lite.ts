export const variants = ["default"] as const;

export interface IModel {
  className?: string;
  title?: string;
  id: string;
  variant: (typeof variants)[number];
}
