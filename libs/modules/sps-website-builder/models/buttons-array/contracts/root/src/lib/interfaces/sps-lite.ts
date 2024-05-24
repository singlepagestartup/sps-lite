export const variants = ["default"] as const;

export interface IModel {
  id: number;
  variant: (typeof variants)[number];
  title: string | null;
  description: string | null;
  className: string | null;
}
