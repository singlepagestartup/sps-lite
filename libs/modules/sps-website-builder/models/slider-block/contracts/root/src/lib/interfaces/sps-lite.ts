export const variants = ["default", "simple"] as const;

export interface IModel {
  id: string;
  variant: (typeof variants)[number];
  anchor: string | null;
  className: string | null;
  title: string | null;
  subtitle: string | null;
  description: string | null;
}
