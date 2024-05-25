export const variants = ["default"] as const;

export interface IModel {
  description?: string;
  subtitle?: string;
  title?: string;
  id: string;
  variant: (typeof variants)[number];
  className: string | null;
}
