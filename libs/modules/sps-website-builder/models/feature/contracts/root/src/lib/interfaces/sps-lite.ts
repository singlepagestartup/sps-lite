export const variants = ["default"] as const;

export interface IModel {
  className?: string;
  description?: string;
  subtitle?: string;
  title?: string;
  id: string;
  variant: (typeof variants)[number];
}
