export const variants = ["default", "simple-centered"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  className: string | null;
  title: string | null;
  description: string | null;
  anchor: string | null;
}
